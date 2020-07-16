const Cosmic = require('../../dist/index')()

const express = require('express')
const app = express()
app.get('/', function(req, res, next) {
	const bucket = Cosmic.bucket({
		slug: 'wedding-site'
	})
	bucket.getObjects().then(data => {
		res.json(data)
	}).catch(err => {
		res.send('Uh Oh!')
	})
})
app.listen(8080, () => console.log('Example app listening on port 8080!'))