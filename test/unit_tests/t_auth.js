const nock = require('nock')
const rewire = require('rewire')
const expect = require('chai').expect

const CosmicLib = rewire('../../index')
const Cosmic = CosmicLib()
const URI = CosmicLib.__get__('URI')

suite('Test Authenticate.', function() {
  setup(function(done) {
    nock.disableNetConnect() // disable internet access to ensure we are stubbing all reqs
    done()
  })

  teardown(function(done) {
    nock.enableNetConnect()
    done()
  })

  test('authenticate hits expected url and returns data from request', function(done) {
    const email = 'testing@cosmicjs.com'
    const password = 'password123'
    const token = 'mytoken'

    /* stub out a request to URI/authenticate, only intercept if body matches */
    const authNock = nock(`${URI}`)
    .post('/authenticate', {
      email,
      password
    }).reply(200, {
      success: true,
      message: 'Token created successfully.',
      token
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    Cosmic.authenticate({
      email,
      password
    }).then(data => {
        expect(data.token).to.equal(token) /* response was as expected */
        expect(authNock.isDone()).to.be.true() /* we hit the stub */
        done()
    }).catch(err => {
        done(err)
    })
  })
})
