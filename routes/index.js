var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function(users) {
      res.render('index', {
        users: users
      })
    })
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/:id', function(req, res) {
  db.getUser(req.params.id, req.app.get('connection'))
    .then(function(user) {
      res.render('profile', user)
    })
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.post('/addUser', function(req, res) {
  db.addUser(req.body.name, req.body.email, req.app.get('connection'))
    .then((user_id) => {
      var link_id = user_id
     db.addProfile(user_id[0],req.app.get('connection'))
       .then(() => res.redirect(`/profile/${link_id}`))
    })

    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })

})

router.get('/addBlog/user/:id', function(req, res) {
  console.log(req.params.id);
  let user = {id: req.params.id}
  res.render('addBlog', user)
})

router.post('/addBlog/user/:id', function(req, res) {
  db.addBlog(req.body.title, req.body.content, req.params.id, req.app.get('connection'))
    .then(() => res.redirect(`/profile/${req.params.id}`))
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router
