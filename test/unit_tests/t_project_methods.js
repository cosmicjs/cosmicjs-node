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