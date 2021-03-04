const envPath = __dirname + `/../../.env`
const expect = require('chai').expect
const Cosmic = require('../../src/index')
require('dotenv').config({ path: envPath })
const { EMAIL, PASSWORD } = process.env
const email = EMAIL
const password = PASSWORD

suite('Test Authenticate.', function() {
  test('authenticate hits expected url and returns data from request', function(done) {
    Cosmic().authenticate({
      email,
      password
    }).then(data => {
      expect(data.token).to.be.a('string') /* response was as expected */
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
})
