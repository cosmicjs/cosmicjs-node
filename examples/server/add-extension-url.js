process.env.COSMIC_API_URL = 'http://localhost:3000'
const Cosmic  = require('../../dist/index')

const fileName = `c12a4150-de2c-11e9-aae6-2b062e8daa4e-extension.zip`
const zipDownloadUrl = `https://cosmic-s3.imgix.net/${fileName}`

const api = Cosmic()

const bucket = api.bucket({
  slug: 'extension-api-test',
  read_key: '',
  write_key: ''
})

const addExtension = async (url) => {
	const createExtensionResponse = await bucket.addExtension({
		zip_url: url
	})
	console.log(createExtensionResponse)
}

addExtension(zipDownloadUrl)
