const nock = require('nock')
const rewire = require('rewire')
const expect = require('chai').expect

const CosmicLib = rewire('../../index')

const TOKEN = 'a-token-from-prior-auth-request'
const Cosmic = CosmicLib({
  token: TOKEN
})
const URI = CosmicLib.__get__('URI') /* ensure we are stubbing same URI as file is using */

suite('Test Main Methods.', function() {
  const expectedAuthHeader = {
    reqheaders: {
      'Authorization': TOKEN
    }
  }

  setup(function(done) {
    nock.disableNetConnect() // disable internet access to ensure we are stubbing all reqs
    done()
  })

  teardown(function(done) {
    nock.enableNetConnect()
    done()
  })

  test('addBucket hits expected url and returns data from request', function(done) {
    const params = {
      title: 'My New Bucket',
      slug: 'my-new-bucket'
    }

    /* stub out a request to URI/addBucket, only intercept if header and body match */
    const reqNock = nock(`${URI}`, expectedAuthHeader)
    .post('/buckets', params)
    .reply(200, {
      success: true,
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    Cosmic.addBucket(params)
    .then(data => {
        expect(data.success).to.be.true() /* response was as expected */
        expect(reqNock.isDone()).to.be.true() /* we hit the stub */
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getBuckets hits expected url and returns data from request', function(done) {

    /* stub out a request to URI/addBucket, only intercept if header and body match */
    const reqNock = nock(`${URI}`, expectedAuthHeader)
    .get('/buckets')
    .reply(200, {
      success: true,
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    Cosmic.getBuckets()
    .then(data => {
        expect(data.success).to.be.true() /* response was as expected */
        expect(reqNock.isDone()).to.be.true() /* we hit the stub */
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('deleteBucket hits expected url and returns data from request', function(done) {
    const params = {
      id: 'my-id'
    }

    /* stub out a request to URI/deleteBucket, only intercept if header and body match */
    const reqNock = nock(`${URI}`, expectedAuthHeader)
    .delete('/buckets/' + params.id)
    .reply(200, {
      success: true,
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    Cosmic.deleteBucket(params)
    .then(data => {
        expect(data.success).to.be.true() /* response was as expected */
        expect(reqNock.isDone()).to.be.true() /* we hit the stub */
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('importBucket hits expected url and returns data from request', function(done) {
    const params = {
      id: 'my-id',
      bucket: {
        object_types: [],
        objects: [],
        media: []
      }
    }

    /* stub out a request to URI/importBucket, only intercept if header and body match */
    const reqNock = nock(`${URI}`, expectedAuthHeader)
    .post('/buckets/' + params.id + '/import', params)
    .reply(200, {
      success: true,
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    Cosmic.importBucket(params)
    .then(data => {
        expect(data.success).to.be.true() /* response was as expected */
        expect(reqNock.isDone()).to.be.true() /* we hit the stub */
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('deployApp hits expected url and returns data from request', function(done) {
    const params = {
      id: 'my-id',
      repo_url: 'http://github.com/test/test',
      repo_branch: 'staging'
    }

    /* stub out a request to URI/deployApp, only intercept if header and body match */
    const reqNock = nock(`${URI}`, expectedAuthHeader)
    .post('/buckets/' + params.id + '/deploy', params)
    .reply(200, {
      success: true,
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    Cosmic.deployApp(params)
    .then(data => {
        expect(data.success).to.be.true() /* response was as expected */
        expect(reqNock.isDone()).to.be.true() /* we hit the stub */
        done()
    }).catch(err => {
        done(err)
    })
  })

})
