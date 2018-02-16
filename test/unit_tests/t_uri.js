const expect = require('chai').expect

const TEST_API_URL = 'https://testing.com'
const TEST_API_VERSION = 'v100'

const rewire = require('rewire')

suite('Test URI Construction.', function() {
  test('URI is created based on env variables', function(done) {
    process.env.COSMIC_API_URL = TEST_API_URL
    process.env.COSMIC_API_VERSION = TEST_API_VERSION

    /* use rewire to be able to access global variables in the file and check URI is created correctly */
    const CosmicLib = rewire('../../index')
    const createdUrl = CosmicLib.__get__('URI')

    try {
      expect(createdUrl).to.equal(`${TEST_API_URL}/${TEST_API_VERSION}`)
      done()
    } catch(e) {
      done(e)
    }
  })

  test('URI is with defaults when no env variables set', function(done) {
    delete process.env.COSMIC_API_URL
    delete process.env.COSMIC_API_VERSION

    /* use rewire to be able to access global variables in the file and check URI is created correctly */
    const CosmicLib = rewire('../../index')
    const createdUrl = CosmicLib.__get__('URI')

    try {
      expect(createdUrl).to.equal('https://api.cosmicjs.com/v1')
      done()
    } catch(e) {
      done(e)
    }
  })
})
