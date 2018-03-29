const nock = require('nock')
const rewire = require('rewire')
const expect = require('chai').expect

const CosmicLib = require('../../index')

const Cosmic = CosmicLib()
// const URI = CosmicLib.__get__('URI') /* ensure we are stubbing same URI as file is using */
const API_URL = process.env.API_URL || 'https://api.cosmicjs.com'
const API_VERSION = process.env.API_VERSION || 'v1'
const URI = `${API_URL}/${API_VERSION}`

suite('Test Bucket Methods.', function() {
  let bucket_config = {}
  let cosmicBucket = null
  setup(function(done) {
    nock.disableNetConnect() // disable internet access to ensure we are stubbing all reqs

    bucket_config = {
      slug: 'my-bucket',
      read_key: 'my-key',
      write_key: 'my-write-key',
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
    const filters = {
      _id: '1',
      title: 'test',
    };

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/objects`)
    .query({
      read_key: bucket_config.read_key,
			limit,
			skip,
			locale,
      status,
      filters,
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
      filters
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

  test('searchObjectType with metafield_value', function(done) {
    const type_slug = 'type-slug'
    const objectTypes = [{id: 1}, {id: 2}]

    const metafield_key = 'meta_key'
    const metafield_value = 'meta_value'

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object-type/${type_slug}/search`)
    .query({
      read_key: bucket_config.read_key,
      metafield_key,
      metafield_value
    })
    .reply(200, {
      objectTypes
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.searchObjectType({
      type_slug,
      metafield_key,
      metafield_value,
    })
    .then(data => {
        expect(data.objectTypes.length).to.equal(objectTypes.length)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('searchObjectType with metafield_object_slug', function(done) {
    const type_slug = 'type-slug'
    const objectTypes = [{id: 1}, {id: 2}]

    const metafield_key = 'meta_key'
    const metafield_object_slug = 'meta_value'

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object-type/${type_slug}/search`)
    .query({
      read_key: bucket_config.read_key,
      metafield_key,
      metafield_object_slug
    })
    .reply(200, {
      objectTypes
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.searchObjectType({
      type_slug,
      metafield_key,
      metafield_object_slug,
    })
    .then(data => {
        expect(data.objectTypes.length).to.equal(objectTypes.length)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('searchObjectType with metafield_value_has', function(done) {
    const type_slug = 'type-slug'
    const objectTypes = [{id: 1}, {id: 2}]

    const metafield_key = 'meta_key'
    const metafield_value_has = 'meta_value'

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object-type/${type_slug}/search`)
    .query({
      read_key: bucket_config.read_key,
      metafield_key,
      metafield_value_has
    })
    .reply(200, {
      objectTypes
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.searchObjectType({
      type_slug,
      metafield_key,
      metafield_value_has,
    })
    .then(data => {
        expect(data.objectTypes.length).to.equal(objectTypes.length)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('searchObjectType with params', function(done) {
    const type_slug = 'type-slug'
    const objectTypes = [{id: 1}, {id: 2}]

    const metafield_key = 'meta_key'
    const metafield_value_has = 'meta_value'
    const limit = 2
    const skip = 1
    const locale = 'US'
    const status = 'published'
    const sort = 'date'

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/object-type/${type_slug}/search`)
    .query({
      read_key: bucket_config.read_key,
      metafield_key,
      metafield_value_has,
      limit,
      skip,
      locale,
      status,
      sort,
    })
    .reply(200, {
      objectTypes
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.searchObjectType({
      type_slug,
      metafield_key,
      metafield_value_has,
      limit,
      skip,
      locale,
      status,
      sort,
    })
    .then(data => {
        expect(data.objectTypes.length).to.equal(objectTypes.length)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('addObjectType', function(done) {
    const params = {
      "title": "Pages",
      "singular": "Page",
      "slug": "pages",
      "metafields": []
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .post(`/${bucket_config.slug}/add-object-type`, Object.assign(params, {write_key: bucket_config.write_key}))
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.addObjectType(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('editObjectType', function(done) {
    const params = {
      slug: 'my-slug',
      "title": "Pages",
      "singular": "Page",
      "slug": "pages",
      "metafields": []
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .put(`/${bucket_config.slug}/edit-object-type`, Object.assign(params, {write_key: bucket_config.write_key}))
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.editObjectType(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('deleteObjectType', function(done) {
    const params = {
      slug: 'my-slug',
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .delete(`/${bucket_config.slug}/object-types/${params.slug}`)
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.deleteObjectType(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('addObject', function(done) {
    const params = {
      "title": "Cosmic JS Example",
      "type_slug": "examples",
      "content": "Learning the Cosmic JS API is really fun and so easy",
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .post(`/${bucket_config.slug}/add-object`, Object.assign(params, {write_key: bucket_config.write_key}))
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.addObject(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('editObject', function(done) {
    const params = {
      "title": "Cosmic JS Example",
      slug: "examples",
      "content": "Learning the Cosmic JS API is really fun and so easy",
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .put(`/${bucket_config.slug}/edit-object`, Object.assign(params, {write_key: bucket_config.write_key}))
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.editObject(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('deleteObject', function(done) {
    const params = {
      slug: 'my-slug',
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .delete(`/${bucket_config.slug}/objects/${params.slug}`)
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.deleteObject(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('addMedia', function(done) {
    const testBuffer = Buffer.from('sample file stream')
    const name = 'test-file'
    const params = {
      media: {
        buffer: testBuffer,
        originalname: name,
      }
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`, {
      reqheaders: {
        'Content-Type': /multipart\/form-data/, // regex check to contain multipart
        'Content-Length': headerExistsCheck
      }
    })
    .post(`/${bucket_config.slug}/media`)
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.addMedia(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('getMedia', function(done) {
    const media = [{id: 1}, {id: 2}]
    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .get(`/${bucket_config.slug}/media`)
    .query({read_key: bucket_config.read_key})
    .reply(200, {
      media
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.getMedia()
    .then(data => {
        expect(data.media.length).to.equal(media.length)
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('deleteMedia', function(done) {
    const params = {
      id: 'media-id'
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .delete(`/${bucket_config.slug}/media/${params.id}`)
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.deleteMedia(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('addWebhook', function(done) {
    const params = {
      event: 'object.created.published',
      endpoint: 'http://my-listener.com'
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .post(`/${bucket_config.slug}/webhooks`, Object.assign(params, {write_key: bucket_config.write_key}))
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.addWebhook(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('deleteWebhook', function(done) {
    const params = {
      id: 'extension-id'
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .delete(`/${bucket_config.slug}/webhooks/${params.id}`, bucket_config)
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.deleteWebhook(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })

  test('addExtension', function(done) {

    const testBuffer = Buffer.from('sample file stream')
    const name = 'test-file'
    const params = {
      zip: {
        buffer: testBuffer,
        originalname: name,
      }
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`, {
      reqheaders: {
        'Content-Type': /multipart\/form-data/, // regex check to contain multipart
        'Content-Length': headerExistsCheck
      }
    })
    .post(`/${bucket_config.slug}/extensions`)
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.addExtension(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })

  })

  test('deleteExtension', function(done) {
    const params = {
      id: 'extension-id'
    }

    /* stub out a request to URI/addBucket, only intercept if query and route match */
    const reqNock = nock(`${URI}`)
    .delete(`/${bucket_config.slug}/extensions/${params.id}`, bucket_config)
    .reply(200, {
      success: true
    })

    /* send the request and expect the returned body to contain the token our stub sends */
    cosmicBucket.deleteExtension(params)
    .then(data => {
        expect(data.success).to.be.true()
        done()
    }).catch(err => {
        done(err)
    })
  })
})

function headerExistsCheck(headerValue) {
   if (headerValue) {
     return true;
   }
   return false;
}
