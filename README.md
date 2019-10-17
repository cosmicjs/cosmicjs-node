<p align="center">
  <a href="https://cosmicjs.com"><img src="https://cosmic-s3.imgix.net/e18557d0-f3fc-11e7-b948-afa0abf2fc70-cosmicjs-logo.png?w=900" alt="Cosmic JS" width="400"></a>
</p>
<p align="center">
  📖 <a href="https://cosmicjs.com/docs">View Docs</a>
</p>

[![npm version](https://badge.fury.io/js/cosmicjs.svg)](https://www.npmjs.com/package/cosmicjs)
[![CircleCI](https://circleci.com/gh/cosmicjs/cosmicjs-node.svg?style=shield)](https://circleci.com/gh/cosmicjs/cosmicjs-node)

This is the official [Cosmic JS](https://cosmicjs.com) JavaScript client.  Use it to log in to your Cosmic JS account, manage Buckets, data, files and users within your Buckets.  Includes `cosmicjs.browser.min.js` for easy integration in the browser.

### Getting started
Go to [https://cosmicjs.com](https://cosmicjs.com), create an account and set up a Bucket.

#### Install
```
npm install cosmicjs
```
#### Or include in an HTML file
```html
<script src="https://unpkg.com/cosmicjs@latest/cosmicjs.browser.min.js"></script>
<script>
// Exposes the global variable Cosmic
// Never expose your private keys or credentials in any public website's client-side code
</script>
```

## Usage
### Authentication [[View Docs](https://cosmicjs.com/docs/rest-api/authentication.html)]
Use your Cosmic JS account email and password to create an authentication token.  **Authentication is only required for account-level access such as adding / removing Buckets from your account, getting user info, etc. The token is not required to query Bucket content**.
```javascript
const Cosmic = require('cosmicjs')() // empty init
Cosmic.authenticate({
  email: 'you@youremail.com',
  password: 'yourpassword'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Buckets

#### Add Bucket [[View Docs](https://cosmicjs.com/docs/rest-api/buckets.html#add-bucket)]
Add a new Bucket to your account.
```javascript
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // from Cosmic.authenticate
})
Cosmic.addBucket({
  title: 'My New Bucket',
  slug: 'my-new-bucket' // must be unique across all Buckets in system
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Get Buckets [[View Docs](https://cosmicjs.com/docs/rest-api/buckets.html#get-buckets)]
Get all Buckets connected to your account.
```javascript
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // required
})
Cosmic.getBuckets().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Connect to Bucket [[View Docs](https://cosmicjs.com/docs/rest-api/buckets.html#connect-to-bucket)]
Use the `Cosmic.bucket` method to connect to different Buckets in your account. If you would like to restrict read and write access to your Bucket, you can do so in Your Bucket > Basic Settings in your [Cosmic JS Dashboard](https://cosmicjs.com/login).
```javascript
// Use the Cosmic.bucket method to connect to different Buckets in your account.
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // optional
})
const bucket = Cosmic.bucket({
  slug: 'my-new-bucket',
  read_key: '',
  write_key: ''
})
const bucket2 = Cosmic.bucket({
  bucket: 'my-other-bucket',
  read_key: '',
  write_key: ''
})
```
#### Get Bucket [[View Docs](https://cosmicjs.com/docs/rest-api/buckets.html#get-bucket)]
Returns the entire Bucket including Object Types, Objects, Media and more.
```javascript
bucket.getBucket().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Delete Bucket [[View Docs](https://cosmicjs.com/docs/rest-api/buckets.html#delete-bucket)]
Deletes the Bucket
```javascript
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // required
})
Cosmic.deleteBucket({
  id: 'bucket_id'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Users
#### Add Users [[View Docs](https://cosmicjs.com/docs/rest-api/users.html#add-user-to-bucket)]
Add a new User to your Bucket.
```javascript
const params = {
  email: 'quasar@theuniverse.com',
  role: 'editor',
  first_name: 'Quasar',
  last_name: 'Jones'
}
bucket.addUser(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Get Users [[View Docs](https://cosmicjs.com/docs/rest-api/users.html#get-users)]
Get users from your Bucket.
```javascript
bucket.getUsers().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Get User [[View Docs](https://cosmicjs.com/docs/rest-api/users.html#get-user)]
Get a user from your Bucket.
```javascript
bucket.getUser({ id: '5357ef811693be2118000001' }).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Object Types
#### Add Object Type [[View Docs](https://cosmicjs.com/docs/rest-api/object-types.html#add-object-type)]
Add a new Object Type to your Bucket.
```javascript
const params = {
  title: 'Pages',
  singular: 'Page',
  slug: 'pages',
  metafields: [
    {
      type: 'text',
      title: 'Headline',
      key: 'headline',
      required: true
    },
    {
      type: 'file',
      title: 'Hero',
      key: 'hero',
      required: true
    }
  ]
}
bucket.addObjectType(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Get Object Types [[View Docs](https://cosmicjs.com/docs/rest-api/object-types.html#get-object-types)]
Get all Object Types in your Bucket.
```javascript
bucket.getObjectTypes().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Edit Object Type [[View Docs](https://cosmicjs.com/docs/rest-api/object-types.html#edit-object-type)]
Edit an existing Object Type in your Bucket.
```javascript
bucket.editObjectType({
  slug: 'posts',
  title: 'New Posts Title'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Delete Object Type [[View Docs](https://cosmicjs.com/docs/rest-api/object-types.html#delete-object-type)]
Delete an existing Object Type from your Bucket.  *This does not delete Objects in this Object Type.
```javascript
bucket.deleteObjectType({
  slug: 'posts'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Objects
#### Add Object [[View Docs](https://cosmicjs.com/docs/rest-api/objects.html#add-object)]
Add a new Object to your Bucket.
```javascript
const params = {
  title: 'Cosmic JS Example',
  type_slug: 'examples',
  content: 'Learning the Cosmic JS API is really fun and so easy',
  metafields: [
    {
      key: 'Headline',
      type: 'text',
      value: 'Learn Cosmic JS!'
    },
    {
      key: 'Author',
      type: 'text',
      value: 'Quasar Jones'
    }
  ],
  options: {
    slug_field: false
  }
}
bucket.addObject(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Get Objects [[View Docs](https://cosmicjs.com/docs/rest-api/objects.html#get-objects)]
Returns all Objects from your Bucket.
```javascript
bucket.getObjects({
  limit: 2,
  props: 'slug,title,type_slug' // get only what you need
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Get Objects by Type [[View Docs](https://cosmicjs.com/docs/rest-api/objects.html#get-objects-by-type)]
Get Objects from an Object Type. Uses `getObjects` method with additional `type` param.
```javascript
const params = {
  type: 'posts',
  limit: 5,
  skip: 0,
  props: 'slug,title,content', // get only what you need
  sort: '-created_at', // optional, if sort is needed. (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
  locale: 'en' // optional, if localization set on Objects
  status: 'all' // optional, if need to get draft Objects
}
bucket.getObjects(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Search and Filter Objects [[View Docs](https://cosmicjs.com/docs/rest-api/objects.html#search-and-filter-objects)]
Search Objects in an Object Type.  Uses `getObjects` method with additional params.
```javascript
// Search by keyword in title or content
const params = {
  type: 'posts',
  q: 'cats',
  limit: 5,
  skip: 0,
  sort: '-created_at', // optional, if sort is needed. (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
  locale: 'en' // optional, if localization set on Objects,
  status: 'all' // optional, if need to get draft Objects,
}
// Search by Metafield value
const params = {
  type_slug: 'posts',
  metafield_key: 'headline',
  metafield_value: 'Hello World',
  limit: 5,
  skip: 0,
  sort: '-created_at', // optional, if sort is needed. (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
}
bucket.getObjects(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Get Single Object [[View Docs](https://cosmicjs.com/docs/rest-api/objects.html#get-object)]
Returns a single Object from your Bucket.
```javascript
bucket.getObject({
  slug: 'home',
  props: 'slug,title,content' // get only what you need
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Edit Object [[View Docs](https://cosmicjs.com/docs/rest-api/objects.html#edit-object)]
Edit an existing Object in your Bucket.
```javascript
bucket.editObject({
  slug: 'cosmic-js-example',
  title: 'New Title Edit'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Edit Object Metafields [[View Docs](https://cosmicjs.com/docs/rest-api/metafields.html#edit-metafields)]
You can edit an existing Object's Metafields by using the following method. This method allows you to edit specific Metafields identified by `key`, without affecting other Metafields.
```javascript
const params = {
  slug: 'my-object',
  metafields: [
    {
      title: 'Headline',
      key: 'headline',
      type: 'text',
      value: 'What I Learned Today'
    },
    {
      title: 'Subheadline',
      key: 'subheadline',
      type: 'text',
      value: 'Something different'
    }
  ]
}
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
bucket.editObjectMetafields(params)
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```

#### Delete Object [[View Docs](https://cosmicjs.com/docs/rest-api/objects.html#delete-object)]
Delete an existing Object in your Bucket.
```javascript
bucket.deleteObject({
  slug: 'cosmic-js-example'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Media
#### Add Media [[View Docs](https://cosmicjs.com/docs/rest-api/media.html#add-media)]
The only required post value is media which is the name of your media sent.
```javascript
bucket.addMedia({
  media: '<FILE_DATA>',
  folder: 'your-folder-slug',
  metadata: {
    caption: 'Beautiful picture of the beach',
    credit: 'Tyler Jackson'
  }
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Get Media [[View Docs](https://cosmicjs.com/docs/rest-api/media.html#get-media)]
You can add the `folder` parameter to get Media from a certain folder. You can use the full [Imgix suite of image processing tools](https://imgix.com) on the URL provided by the `imgix_url` property value. Check out the Imgix documentation for more info.
```javascript
bucket.getMedia({
  folder: 'groomsmen',
  props: 'imgix_url' // get only what you need
  limit: 3
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Delete Media [[View Docs](https://cosmicjs.com/docs/rest-api/media.html#delete-media)]
```javascript
bucket.deleteMedia({
 id: '5a4b18e12fff7ec0e3c13c65'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
### Webhooks
#### Add Webhook [[View Docs](https://cosmicjs.com/docs/rest-api/webhooks.html#add-webhook)]
Sends a POST request to the endpoint of your choice when the event occurs.  The data payload in the same fomat as Object and Media.  Read more about Webhooks including the payload sent to the endpoint on the <a href='https://cosmicjs.com/docs/webhooks' target='_blank'>Webhooks documentation page</a>.
```javascript
bucket.addWebhook({
  event: 'object.created.published',
  endpoint: 'http://my-listener.com'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Get Webhooks [[View Docs](https://cosmicjs.com/docs/rest-api/webhooks.html#get-webhooks)]
Get webhooks in your Bucket. Authentication token is required in the header (see Authentication section). Must have admin level access.
```javascript
bucket.getWebhooks()
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```
#### Delete Webhook [[View Docs](https://cosmicjs.com/docs/rest-api/webhooks.html#delete-a-webhook)]
```javascript
bucket.deleteWebhook({
  id: 'c62defe0-5f93-11e7-8054-873245f0e98d'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
### Extensions
#### Add Extension [[View Docs](https://cosmicjs.com/docs/rest-api/extensions.html#add-extension)]
Adds an Extension to your Bucket. Post values include `zip` (which is the name of your file sent) or `zip_url` (which is the url of the zip file) or `url` (which is hosted url of extension). Note: You can only post one of these at a time. Read more about Extensions on the <a href='https://cosmicjs.com/docs/extensions' target='_blank'>Extensions documentation page</a>.
```javascript
bucket.addExtension({
	zip: '<ZIP_FILE_DATA>',
	zip_url: '<ZIP_FILE_URL>',
	url: '<EXTENSION_HOSTED_URL'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Edit Extension [[View Docs](https://cosmicjs.com/docs/rest-api/extensions.html#edit-extension)]
If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present. For security, `query_params` values will be saved as JavaScript Web Tokens (JWT), but available in your Extension as a decoded value.
```javascript
bucket.editExtension({
  id: 'c62defe0-5f93-11e7-8054-873245f0e98d',
  query_params: [
    {
      key: "some_api_account_id",
      value: "someapiid12345"
    },
    {
      key: "some_api_account_secret",
      value: "supersecret12345"
    }
  ]
})
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```
#### Delete Extension [[View Docs](https://cosmicjs.com/docs/rest-api/extensions.html#delete-extension)]
```javascript
bucket.deleteExtension({
  id: 'c62defe0-5f93-11e7-8054-873245f0e98d'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
