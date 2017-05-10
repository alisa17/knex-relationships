// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('getUsers gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 26
  return db.getUsers(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getUsers gets a single user', function (t) {
  var expected = 'Ambitious Aardvark'
  return db.getUser(99901, t.context.connection)
    .then(function (result) {
      var actual = result.name
      t.is(expected, actual)
    })
})

test('addUser adds a single user', function (t) {
  return db.addUser('bob','bob', t.context.connection)
    .then((res) => {
      return t.context.connection('users').select()
    })
    .then((users) => {
      t.is(users.length, 27)
    })
})


test('addProfile adds a single profile', function (t) {
  return db.addProfile(999999, t.context.connection)
    .then((res) => {
      return t.context.connection('profiles').select()
    })
    .then((profiles) => {
      t.is(profiles.length, 27)
    })
})


test('addBlog adds a blog', function (t) {
  return db.addBlog('bob blog', 'bob', t.context.connection)
    .then((res) => {
      return t.context.connection('posts').select()
    })
    .then((posts) => {
      t.is(posts.length, 2)
    })
})
