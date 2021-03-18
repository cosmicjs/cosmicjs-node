const fs = require('fs')
const expect = require('chai').expect
const Cosmic = require('../../src/index')
const { EMAIL, PASSWORD } = require('../constants')

suite('Test Bucket Methods.', function() {
  this.timeout(10000);
  let config = {};
  let CosmicBucket = {};
  setup(function(done) {
    Cosmic().authenticate({
      email: EMAIL,
      password: PASSWORD
    }).then(data => {
      config.token = data.token;
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
  test('getBuckets', function(done) {
    Cosmic({ token: config.token }).getBuckets()
    .then(data => {
      expect(data.buckets).to.be.an('array')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('addBucket', function(done) {
    Cosmic({ token: config.token }).addBucket({
      title: "My Super Awesome Bucket"
    })
    .then(data => {
      expect(data.bucket).to.be.an('object')
      // Set Bucket
      config.bucket = data.bucket
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('addObjectType', function(done) {
    CosmicBucket = Cosmic().bucket({
      slug: config.bucket.slug,
      read_key: config.bucket.api_access.read_key,
      write_key: config.bucket.api_access.write_key
    })
    CosmicBucket.addObjectType({
      title: 'Posts',
      metafields: [{
        type: 'text',
        title: 'Headline',
        key: 'headline',
        value: ''
      }]
    })
    .then(data => {
      expect(data.object_type).to.be.an('object')
      config.object_type = data.object_type
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('editObjectType', function(done) {
    CosmicBucket.editObjectType({
      slug: config.object_type.slug,
      title: 'Posts EDITED',
      metafields: [{
        type: 'text',
        title: 'Headline EDITED',
        key: 'headline',
        value: ''
      }]
    })
    .then(data => {
      expect(data.object_type).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('addObject', function(done) {
    CosmicBucket.addObject({
      type: config.object_type.slug,
      title: 'My New Awesome Post',
      metafields: [{
        type: 'text',
        title: 'Headline',
        key: 'headline',
        value: 'This is AMAZING!'
      }]
    })
    .then(data => {
      config.object = data.object
      expect(data.object).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('editObject', function(done) {
    CosmicBucket.editObject({
      id: config.object.id,
      title: 'EDITED My New Awesome Post'
    })
    .then(data => {
      expect(data.object).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('deleteObject', function(done) {
    CosmicBucket.deleteObject({
      id: config.object.id
    })
    .then(data => {
      expect(data.message).to.be.a('string')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('deleteObjectType', function(done) {
    CosmicBucket.deleteObjectType({
      slug: config.object_type.slug
    })
    .then(data => {
      expect(data.message).to.be.a('string')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('addMedia', function(done) {
    const media_object = {
      originalname: 'logo.jpg',
      buffer: fs.createReadStream('./test/logo.jpg')
    };
    CosmicBucket.addMedia({
      media: media_object
    })
    .then(data => {
      config.media = data.media
      expect(data.media).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('deleteMedia', function(done) {
    CosmicBucket.deleteMedia({
      id: config.media.id
    })
    .then(data => {
      expect(data.message).to.be.a('string')
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })

  test('deleteBucket', function(done) {
    Cosmic({ token: config.token }).deleteBucket({
      slug: config.bucket.slug
    })
    .then(data => {
      expect(data.message).to.be.a('string')
      done()
    }).catch(err => {
      done(err)
    })
  })
})