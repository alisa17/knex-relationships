var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /', (t) => {
  return request(t.context.app)
    .get('/')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.true(res.text.match('Aardvark') != null)
        resolve()
      })

    })
})

test('POST /addUser', (t) => {
  let id = 99927
  return request(t.context.app)
    .post('/addUser')
    .send({
      name: 'bob',
      email: 'bob'
    })
    .expect(302)
    .then((res) => {
         let actual = res.text
         let expected = `Found. Redirecting to /profile/${id}`
         t.is(actual,expected, "Message")
         t.pass()
    })
})
