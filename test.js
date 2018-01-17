const Cosmic = require('./index')
console.log(Cosmic().bucket)
// Authenticate
// Cosmic().authenticate({
// 	email: 'spirony@gmail.com',
//   password: 'testpass'
// }).then(auth_data => {
// 	Cosmic({ token: auth_data.token }).addBucket({
// 		title: 'Test New API',
// 		slug: 'test-another-api'
// 	}).then(data => {
// 		console.log(data)
// 	}).catch(err => {
// 		console.log(err)
// 	})
// }).catch(err => {
// 	console.log(err)
// })
// console.log(Cosmic)
// Cosmic().authenticate({
// 	email: 'spirony@gmail.com',
//   password: 'testpass'
// }).then(auth_data => {
// 	const bucket = Cosmic({
// 		token: auth_data.token
// 	}).bucket({
// 	  bucket: 'wedding-site',
// 	  read_key: ''
// 	})
// 	// console.log(bucket)
// 	bucket.getBucket().then(data => {
// 		console.log(data)
// 	}).catch(err => {
// 		console.log(err)
// 	})
// }).catch(err => {
// 	console.log(err)
// })

// Get Bucket
const bucket = Cosmic().bucket({
  slug: 'creative-agency',
  read_key: ''
})
// console.log(bucket)
bucket.getBucket().then(data => {
	console.log(data)
}).catch(err => {
	console.log(err)
})

// Get Media
// Cosmic({
//   bucket: 'wedding-site',
//   write_key: ''
// }).getMedia({ limit: 3 }).then(data => {
// 	console.log(data)
// }).catch(err => {
// 	console.log(err)
// })

// Add Webhook
// Cosmic({
//   bucket: 'test-new-api',
//   write_key: ''
// }).addWebhook({
// 	"event": "object.created.published",
// 	"endpoint": "http://my-listener.com"
// }).then(data => {
// 	console.log(data)
// }).catch(err => {
// 	console.log(err)
// })

// Delete Webhook
// Cosmic({
//   bucket: 'test-new-api',
//   write_key: ''
// }).deleteWebhook({
// 	id: "d923f260-f049-11e7-8247-a7dc79702428"
// }).then(data => {
// 	console.log(data)
// }).catch(err => {
// 	console.log(err)
// })

// const api = Cosmic.config({
//   bucket: 'wedding-site',
//   read_key: ''
// })
// api.searchObjectType({
//   type_slug: 'groomsmen',
//   metafield_key: 'official-title',
//   metafield_value: 'Best Man'
// }).then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })

// const api = Cosmic.config({
//   bucket: 'test-new-api',
//   write_key: 'xa9lkRaOzo9vaDcqcsBhZzdZfd6kAFBMwlJrWrCRklTfZf8kWo'
// })
// api.deleteObject({
//   slug: 'test-post'
// }).then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err)
// })
// const express = require('express')
// const app = express()
// var multer  = require('multer')
// var fs = require('fs')
// var upload = multer()

// const bodyParser = require('body-parser')
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded())

// // parse application/json
// app.use(bodyParser.json())

// app.post('/', upload.any(), function(req, res, next) {
// 	const api = Cosmic.config({
// 	  bucket: 'test-new-api',
// 	  write_key: ''
// 	})
// 	// console.log(req.files[0])
// 	// console.log(fs.createReadStream('/Users/tonyspiro/desktop/family.jpg'))
//   // api.addMedia({ media: fs.createReadStream('/Users/tonyspiro/desktop/family.jpg') }).then(data => {
//   api.addMedia({ media: fs.createReadStream('/Users/tonyspiro/desktop/family.jpg'), metadata: req.body.metadata }).then(data => {
// 		res.send('It worked!')
// 	}).catch(err => {
// 		res.send('Uh Oh!')
// 	})
// })

// app.listen(8080, () => console.log('Example app listening on port 3000!'))
