const fs = require('fs')
const expect = require('chai').expect
const Cosmic = require('../../src/index')
const { EMAIL, PASSWORD } = require('../constants')

let config = {};
suite('Test Project Methods.', function() {
  this.timeout(10000);
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
  test('addProject', function(done) {
    Cosmic({ token: config.token }).addProject({
      title: 'My New Project'
    })
    .then(data => {
      expect(data.project).to.be.an('object')
      config.project = data.project;
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
  test('getProjects', function(done) {
    Cosmic({ token: config.token }).getProjects()
    .then(data => {
      expect(data.projects).to.be.an('array')
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
  test('getProject', function(done) {
    Cosmic({ token: config.token }).getProject({ id: config.project.id })
    .then(data => {
      expect(data.project).to.be.an('object')
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
  test('editProject', function(done) {
    Cosmic({ token: config.token }).editProject({ 
      id: config.project.id,
      title: 'New Project Edit'
    })
    .then(data => {
      expect(data.project).to.be.an('object')
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
  test('deleteProject', function(done) {
    Cosmic({ token: config.token }).deleteProject({ id: config.project.id })
    .then(data => {
      expect(data.message).to.be.a('string')
      done()
    }).catch(err => {
      console.log(err)
      done(err)
    })
  })
})

suite('Test Bucket Methods.', function() {
  this.timeout(10000);
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

  test('editBucket', function(done) {
    Cosmic({ token: config.token }).editBucket({
      slug: config.bucket.slug,
      title: "My Super Awesome Bucket EDIT"
    })
    .then(data => {
      expect(data.bucket).to.be.an('object')
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

  test('getObject', function(done) {
    CosmicBucket.getObject({
      id: config.object.id,
      props: 'title,slug'
    })
    .then(data => {
      expect(data.object).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('getObjects', function(done) {
    CosmicBucket.getObjects({
      type: config.object.type,
      props: 'title,slug'
    })
    .then(data => {
      expect(data.objects).to.be.an('array')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('addObjectRevision', function(done) {
    CosmicBucket.addObjectRevision({
      id: config.object.id,
      type: config.object_type.slug,
      title: 'My New Awesome Post REVISION',
      metafields: [{
        type: 'text',
        title: 'Headline',
        key: 'headline',
        value: 'This is AMAZING!'
      }]
    })
    .then(data => {
      expect(data.revision).to.be.an('object')
      done()
    }).catch(err => {
      done(err)
    })
  })
  // NEEDS FURTHER DEVELOPMENT (addMergeRequest, etc)
  // test('getMergeRequestObjects', function(done) {
  //   MergeCosmicBucket.getMergeRequestObjects({
  //     id: 'merge-request-id',
  //     props: 'title'
  //   })
  //   .then(data => {
  //     expect(data.objects).to.be.an('array')
  //     done()
  //   }).catch(err => {
  //     done(err)
  //   })
  // })

  test('getObjectMetafields', function(done) {
    CosmicBucket.getObjectMetafields({
      id: config.object.id
    })
    .then(data => {
      expect(data.metafields).to.be.an('array')
      done()
    }).catch(err => {
      done(err)
    })
  })

  test('editObjectMetafield', function(done) {
    CosmicBucket.editObjectMetafield({
      id: config.object.id,
      key: 'headline',
      value: 'New Metafield Value'
    })
    .then(data => {
      expect(data.metafield).to.be.an('object')
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

  test('getMedia', function(done) {
    CosmicBucket.getMedia({
      limit: 2
    })
    .then(data => {
      expect(data.media).to.be.an('array')
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