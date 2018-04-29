const Cosmic = require('./index')()
const bucket = Cosmic.bucket({
  slug: 'wedding-site',
  write_key: ''
})
const params = {
  "title": "Pages 2",
  "singular": "Page 2",
  "slug": "pages2",
  "metafields": [
    {
      "type": "text",
      "title": "Headline",
      "key": "headline",
      "required": true
    },
    {
      "type": "file",
      "title": "Hero",
      "key": "hero",
      "required": true
    }
  ]
}
bucket.addObjectType(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
