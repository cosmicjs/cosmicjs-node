const expect = require('chai').expect
const Cosmic = require('../../src/index')
const EMAIL = process.env.EMAIL
const PASSOWRD = process.env.PASSOWRD

suite('Test Authenticate.', function() {
  test('authenticate hits expected url and returns data from request', function(done) {
    const email = EMAIL
    const password = PASSOWRD
    Cosmic.authenticate({
      email,
      password
    }).then(data => {
      console.log(data)
        expect(data.token).to.be.string(token) /* response was as expected */
        done()
    }).catch(err => {
        done(err)
    })
  })
})
