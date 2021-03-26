const expect = require('chai').expect
const Cosmic = require('../../src/index')
const { EMAIL, PASSWORD } = require('../constants')

suite('Test Authenticate.', function() {
  this.timeout(30000);
  let config = {};
  test('authenticate hits expected url and returns data from request', function(done) {
    Cosmic().authenticate({
      email: EMAIL,
      password: PASSWORD
    }).then(data => {
      config.token = data.token;
      expect(data.token).to.be.a('string') /* response was as expected */
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
  test('getUser', function(done) {
    Cosmic({ token: config.token }).getUser()
    .then(data => {
      expect(data.user).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })
})
