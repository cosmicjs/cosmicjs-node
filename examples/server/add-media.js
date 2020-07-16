// const Cosmic = require('../../dist/index')()

const express = require('express')
const app = express()
var multer  = require('multer')
const Cosmic  = require('../../dist/index')

const api = Cosmic()
const bucket = api.bucket({
	slug: 'test-new-api',
	write_key: ''
})
const upload = multer()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post('/', upload.any(), function(req, res, next) {
	bucket.addMedia({ media: req.files[0] })
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			res.json(err)
		})
})

app.listen(8080, () => console.log('Example app listening on port 8080!'))
