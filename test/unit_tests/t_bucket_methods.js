const nock = require('nock')
const rewire = require('rewire')
const expect = require('chai').expect

const CosmicLib = require('../../index')

const Cosmic = CosmicLib()
// const URI = CosmicLib.__get__('URI') /* ensure we are stubbing same URI as file is using */
const API_URL = process.env.API_URL || 'https://api.cosmicjs.com'
const API_VERSION = process.env.API_VERSION || 'v1'
const URI = `${API_URL}/${API_VERSION}`

suite.only('Test Bucket Methods.', function() {
  let bucket_config = {}
  let cosmicBucket = null
  setup(function(done) {
    nock.disableNetConnect() // disable internet access to ensure we are stubbing all reqs

    bucket_config = {
      slug: 'my-bucket',
      read_key: 'my-key'
    }

    cosmicBucket = Cosmic.bucket(bucket_config)

    done()
  })

  teardown(function(done) {
    nock.enableNetConnect()
    done()
  })

  test('getBucket', function(done) {
    const id = 1

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/`)
    .query({read_key: bucket_config.read_key})
    .reply(200, {
      bucket: {id}
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getBucket()
    .then(data => {
        expect(data.bucket.id).to.equal(id)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getObjects', function(done) {
    const objects = [{id: 1}, {id: 2}]

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/objects`)
    .query({read_key: bucket_config.read_key})
    .reply(200, {
      objects
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getObjects()
    .then(data => {
        expect(data.objects.length).to.equal(2)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getObjects with params', function(done) {
    const objects = [{id: 1}, {id: 2}]
    const limit = 2
    const skip = 1
    const locale = 'US'
    const status = 'published'

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/objects`)
    .query({
      read_key: bucket_config.read_key,
			limit,
			skip,
			locale,
			status,
    })
    .reply(200, {
      objects
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getObjects({
			limit,
			skip,
			locale,
			status,
    })
    .then(data => {
        expect(data.objects.length).to.equal(2)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getObject', function(done) {
    const slug = 'my-slug'
    const object = {id: 1}

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object/${slug}`)
    .query({read_key: bucket_config.read_key})
    .reply(200, {
      object
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getObject({
      slug
    })
    .then(data => {
        expect(data.object.id).to.equal(object.id)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getObject with params', function(done) {
    const slug = 'my-slug'
    const object = {id: 1}
    const locale = 'US'
    const status = 'published'

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object/${slug}`)
    .query({
      read_key: bucket_config.read_key,
      locale,
      status,
    })
    .reply(200, {
      object
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getObject({
      slug,
      locale,
      status,
    })
    .then(data => {
        expect(data.object.id).to.equal(object.id)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getObjectTypes', function(done) {
    const objectTypes = [{id: 1}, {id: 2}]

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object-types`)
    .query({read_key: bucket_config.read_key})
    .reply(200, {
      objectTypes
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getObjectTypes()
    .then(data => {
        expect(data.objectTypes.length).to.equal(objectTypes.length)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getObjectTypes with params', function(done) {
    const objectTypes = [{id: 1}, {id: 2}]
    const limit = 2
    const skip = 1
    const locale = 'US'
    const status = 'published'

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object-types`)
    .query({
      read_key: bucket_config.read_key,
			limit,
			skip,
			locale,
			status,
    })
    .reply(200, {
      objectTypes
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getObjectTypes({
			limit,
			skip,
			locale,
			status,
    })
    .then(data => {
        expect(data.objectTypes.length).to.equal(objectTypes.length)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getObjectsByTypes', function(done) {
    const type_slug = 'type-slug'
    const objectTypes = [{id: 1}, {id: 2}]

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object-type/${type_slug}`)
    .query({read_key: bucket_config.read_key})
    .reply(200, {
      objectTypes
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getObjectsByType({
      type_slug
    })
    .then(data => {
        expect(data.objectTypes.length).to.equal(objectTypes.length)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getObjectsByTypes with params', function(done) {
    const type_slug = 'type-slug'
    const objectTypes = [{id: 1}, {id: 2}]
    const limit = 2
    const skip = 1
    const locale = 'US'
    const status = 'published'

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object-type/${type_slug}`)
    .query({
      read_key: bucket_config.read_key,
			limit,
			skip,
			locale,
			status,
    })
    .reply(200, {
      objectTypes
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getObjectsByType({
      type_slug,
			limit,
			skip,
			locale,
			status,
    })
    .then(data => {
        expect(data.objectTypes.length).to.equal(objectTypes.length)
        done()
    }).catch(err => {
        done(err)
    })
  })
})
