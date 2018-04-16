// const Cosmic = require('../../index')()

const express = require('express')
const app = express()
const Cosmic  = require('../../index')({
  token: "token-here"
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post('/', function(req, res, next) {
	Cosmic.importBucket({ id: req.body.id, bucket: req.body.bucket })
		.then((response) => {
			res.json(response)
		})
		.catch((err) => {
			res.json(err)
		})
})

app.listen(8080, () => console.log('Example app listening on port 8080!'))
