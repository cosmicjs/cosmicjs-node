const expect = require('chai').expect
const Cosmic = require('../../src/index')
const { EMAIL, PASSWORD } = require('../constants')

suite('Test Authenticate.', function() {
  test('authenticate hits expected url and returns data from request', function(done) {
    Cosmic().authenticate({
      email: EMAIL,
      password: PASSWORD
    }).then(data => {
      expect(data.token).to.be.a('string') /* response was as expected */
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
})
