## API Reference
Find the full API reference below with relevant links to further documentation.

### Authentication [[View Docs](https://docs.cosmicjs.com/rest-api/authentication.html)]
Use your Cosmic account email and password to create an authentication token.  **Authentication is only required for account-level access such as adding / removing Buckets from your account, getting user info, etc. The token is not required to query Bucket content**.
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

#### Add Bucket [[View Docs](https://docs.cosmicjs.com/rest-api/buckets.html#add-bucket)]
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

#### Get Buckets [[View Docs](https://docs.cosmicjs.com/rest-api/buckets.html#get-buckets)]
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

#### Connect to Bucket [[View Docs](https://docs.cosmicjs.com/rest-api/buckets.html#connect-to-bucket)]
Use the `Cosmic.bucket` method to connect to your Bucket. Get your Bucket slug located in <i>Your Bucket > Basic Settings > API Access</i> in your [Cosmic Dashboard](https:/www.cosmicjs.com/login).
```javascript
// Use the Cosmic.bucket method to connect to your Bucket.
const Cosmic = require('cosmicjs')()
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
```
#### Get Bucket [[View Docs](https://docs.cosmicjs.com/rest-api/buckets.html#get-bucket)]
Returns the entire Bucket including Object Types, Objects, Media and more.
```javascript
bucket.getBucket().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Delete Bucket [[View Docs](https://docs.cosmicjs.com/rest-api/buckets.html#delete-bucket)]
Deletes the Bucket
```javascript
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // required
})
Cosmic.deleteBucket({
  slug: 'bucket-slug'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Users
#### Add Users [[View Docs](https://docs.cosmicjs.com/rest-api/users.html#add-user-to-bucket)]
Add a new User to your Bucket.
```javascript
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // from Cosmic.authenticate
})
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
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

#### Get Users [[View Docs](https://docs.cosmicjs.com/rest-api/users.html#get-users)]
Get users from your Bucket.
```javascript
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // from Cosmic.authenticate
})
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.getUsers().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Get User [[View Docs](https://docs.cosmicjs.com/rest-api/users.html#get-user)]
Get a user from your Bucket.
```javascript
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // from Cosmic.authenticate
})
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.getUser({ id: '5357ef811693be2118000001' }).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Object Types
#### Add Object Type [[View Docs](https://docs.cosmicjs.com/rest-api/object-types.html#add-object-type)]
Add a new Object Type to your Bucket.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
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
#### Get Object Types [[View Docs](https://docs.cosmicjs.com/rest-api/object-types.html#get-object-types)]
Get all Object Types in your Bucket.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.getObjectTypes().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Edit Object Type [[View Docs](https://docs.cosmicjs.com/rest-api/object-types.html#edit-object-type)]
Edit an existing Object Type in your Bucket.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.editObjectType({
  slug: 'posts',
  title: 'New Posts Title'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
#### Delete Object Type [[View Docs](https://docs.cosmicjs.com/rest-api/object-types.html#delete-object-type)]
Delete an existing Object Type from your Bucket.  *This does not delete Objects in this Object Type.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.deleteObjectType({
  slug: 'posts'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Objects
#### Add Object [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#add-object)]
Add a new Object to your Bucket.
```javascript
const Cosmic = require('cosmicjs')()
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key' // Include only if doing write operations.
})
const params = {
  title: 'Cosmic Example',
  type: 'examples',
  content: 'Learning the Cosmic API is really fun and so easy',
  metafields: [
    {
      title: 'Headline', 
      key: 'headline',
      type: 'text',
      value: 'Learn Cosmic!'
    },
    {
      title: 'Author', 
      key: 'author',
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
#### Get All Objects [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#get-objects)]
Returns all Objects from your Bucket.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.getObjects({
  limit: 2,
  props: 'slug,title,type_slug' // get only what you need
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Get Objects by Type [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#get-objects)]
Get Objects from an Object Type. Uses `getObjects` method with additional `type` param.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
const params = {
  query: {
    type: 'posts',
    locale: 'en' // optional, if localization set on Objects
  },
  limit: 5,
  props: 'id,slug,title,content', // get only what you need
  sort: '-created_at' // optional, defaults to order in dashboard
}
bucket.getObjects(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Queries [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#advanced-queries-beta)]
Advanced queries give you powerful NoSQL database-like functionality for content fetching. Use the `query` parameter to send a valid JSON (stringified) query on the Get Objects Endpoint. View more examples in [the docs](https://docs.cosmicjs.com/rest-api/objects.html#advanced-queries-beta).
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
const params = {
  props: 'slug,title,content', // get only what you need
  query: {
    type: 'posts',
    'metadata.number': {
      '$gte': 3,
      '$lte': 6
    }
  }
}
bucket.getObjects(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### TODO Get Merge Request Objects [[View Blog Announcement](https://www.cosmicjs.com/blog/introducing-merge-requests)]
Get Objects included in a [Merge Request](https://www.cosmicjs.com/blog/introducing-merge-requests). Same query params options available as `getObjects`.
```javascript
const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'target-bucket-slug',
  read_key: 'target-bucket-read-key'
})
const data = await bucket.getMergeRequestObjects({
  id: 'merge-request-id-found-in-dashboard',
  props: 'slug,title,content' // use props to limit response payload
})
```
Use these Objects to then overright Objects from the target Bucket response based on unique `slug` and `locale` identifiers. An example of this logic can be found in the [Next Merge template](https://github.com/cosmicjs/next-merge/blob/master/lib/merge.js#L19).

### Get Single Object [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#get-object)]
Returns a single Object from your Bucket.

**By Id**

```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.getObject({
  id: '6038150ead9d8a0ee8ebe290', // Object ID
  props: 'slug,title,content' // get only what you need
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Edit Object [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#edit-object)]
Edit an existing Object in your Bucket.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.editObject({
  id: '6038150ead9d8a0ee8ebe290', // Object ID
  title: 'New Title Edit'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### Edit Object Metafields [[View Docs](https://docs.cosmicjs.com/rest-api/metafields.html#edit-metafields)]
You can edit an existing Object's Metafields by using the following method. This method allows you to edit specific Metafields identified by `key`, without affecting other Metafields.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
const params = {
  id: '6038150ead9d8a0ee8ebe290',
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
bucket.editObjectMetafields(params)
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```

#### Delete Object [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#delete-object)]
Delete an existing Object in your Bucket.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.deleteObject({
  id: '6038150ead9d8a0ee8ebe290', // Object ID
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Object Revisions

#### Get Object Revisions [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#get-object-revisions)]
Returns all Object Revisions from the specified Object.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.getObjectRevisions({
  id: '6038150ead9d8a0ee8ebe290', // Object ID
  props: 'slug,title,created_at',  // get only what you need
  limit: 2,
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

#### TODO Add Object Revision [[View Docs](https://docs.cosmicjs.com/rest-api/objects.html#add-object-revision)]
Add Object Revision to an Object.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.addObjectRevision({
  id: '6038150ead9d8a0ee8ebe290', // Object ID
  content: 'Some different content to try out',
  status: 'draft'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

### Media
#### Add Media [[View Docs](https://docs.cosmicjs.com/rest-api/media.html#add-media)]
The only required post value is media which is the name of your media sent.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
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
#### Get Media [[View Docs](https://docs.cosmicjs.com/rest-api/media.html#get-media)]
You can add the `folder` parameter to get Media from a certain folder. You can use the full [Imgix suite of image processing tools](https://imgix.com) on the URL provided by the `imgix_url` property value. Check out the Imgix documentation for more info.
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
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
#### Delete Media [[View Docs](https://docs.cosmicjs.com/rest-api/media.html#delete-media)]
```javascript
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key'
})
bucket.deleteMedia({
 id: '5a4b18e12fff7ec0e3c13c65'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
### TODO Webhooks
#### Add Webhook [[View Docs](https://docs.cosmicjs.com/rest-api/webhooks.html#add-webhook)]
Sends a POST request to the endpoint of your choice when the event occurs.  The data payload in the same fomat as Object and Media.  Read more about Webhooks including the payload sent to the endpoint on the <a href='https:/docs./cosmicjs/docs/webhooks' target='_blank'>Webhooks documentation page</a>.
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
#### TODO Get Webhooks [[View Docs](https://docs.cosmicjs.com/rest-api/webhooks.html#get-webhooks)]
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
#### TODO Delete Webhook [[View Docs](https://docs.cosmicjs.com/rest-api/webhooks.html#delete-a-webhook)]
```javascript
bucket.deleteWebhook({
  id: 'c62defe0-5f93-11e7-8054-873245f0e98d'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
### TODO Extensions
#### Add Extension [[View Docs](https://docs.cosmicjs.com/rest-api/extensions.html#add-extension)]
Adds an Extension to your Bucket. Post values include `zip` (which is the name of your file sent) or `zip_url` (which is the url of the zip file) or `url` (which is hosted url of extension). Note: You can only post one of these at a time. Read more about Extensions on the <a href='https://docs.cosmicjs.com/extensions' target='_blank'>Extensions documentation page</a>.
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
#### Get Extensions [[View Docs](https://docs.cosmicjs.com/rest-api/extensions.html#get-extensions)]
Get Extensions in your Bucket. Authentication token is required in the header (see Authentication section). Must have admin level access.
```javascript
bucket.getExtensions()
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```
#### Edit Extension [[View Docs](https://docs.cosmicjs.com/rest-api/extensions.html#edit-extension)]
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
#### Delete Extension [[View Docs](https://docs.cosmicjs.com/rest-api/extensions.html#delete-extension)]
```javascript
bucket.deleteExtension({
  id: 'c62defe0-5f93-11e7-8054-873245f0e98d'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
