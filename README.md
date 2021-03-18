<p align="center">
  <a href="https://www.cosmicjs.com"><img src="https://cdn.cosmicjs.com/3cf62ab0-8e13-11ea-9b8f-cd0254a8c979-cosmic-dark.svg" alt="Cosmic" width="400"></a>
</p>
<p align="center">
  📖 <a href="https://docs.cosmicjs.com">View Docs</a>
</p>
<p align="center">
	<a href="https://www.npmjs.com/package/cosmicjs"><img src="https://badge.fury.io/js/cosmicjs.svg" alt="npm version"></a>
	<a href="https://circleci.com/gh/cosmicjs/cosmicjs-node"><img src="https://circleci.com/gh/cosmicjs/cosmicjs-node.svg?style=shield" alt="CircleCI"></a>
</p>

# Cosmic JavaScript Client

This is the official JavaScript client for [Cosmic](https://www.cosmicjs.com) [headless CMS](https://www.cosmicjs.com/headless-cms).

## What is Cosmic?
Cosmic is a headless CMS, meaning we provide a web dashboard to manage content and an API toolkit to deliver content to any website or app.

## Why use a Headless CMS?
Teams use Cosmic instead of a legacy installed CMS to help them save time and trouble on CMS infrastructure maintenance. They use our service (either with a paid plan, or generous free plan) and can focus on application business logic and content development instead of CMS infrastructure.

## How to use this NPM module
Use this NPM module to connect to your Cosmic Buckets and deliver content to any JavaScript enabled website or app.  Advanced features are available including logging into your Cosmic account, managing Buckets, CRUD data management, file uploads, and user management. Use it in the browser or in server-side environments like Node.js.

## Getting started
Go to [https://www.cosmicjs.com](https://www.cosmicjs.com), create an account and set up a Bucket.

## Install
```
npm install cosmicjs
```
### Or include in an HTML file
```html
<script src="https://unpkg.com/cosmicjs@latest/cosmicjs.browser.min.js"></script>
<script>
// Exposes the global variable Cosmic
// Never expose your private keys or credentials in any public website's client-side code
</script>
```

## Basic Usage

#### Connect to Bucket [[View Docs](https://docs.cosmicjs.com/api-reference/getting-started/introduction#api-access-keys)]
Use the `Cosmic.bucket` method to connect to your Bucket. Get your Bucket slug located in <i>Your Bucket > Basic Settings > API Access</i> in your [Cosmic Dashboard](https://app.cosmicjs.com/login).
```javascript
// Use the Cosmic.bucket method to connect to your Bucket.
const Cosmic = require('cosmicjs')()
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-bucket-read-key',
  write_key: 'your-bucket-write-key' // Include only if doing write operations.
})
```

### Get Objects by Type [[View Docs](https://docs.cosmicjs.com/api-reference/objects)]
Get Objects from an Object Type. Uses `getObjects` method with additional `type` param. Additional options noted below. [See docs for more options](https://docs.cosmicjs.com/api-reference/objects) including powerful [queries and logic](https://docs.cosmicjs.com/api-reference/queries).
```javascript
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

### Get Single Object [[View Docs](https://docs.cosmicjs.com/api-reference/objects#get-object)]
Returns a single Object from your Bucket.

**By Id**

```javascript
bucket.getObject({
  id: '6038150ead9d8a0ee8ebe290', // Object ID
  props: 'slug,title,content' // get only what you need
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

**By Slug**

Use the `getObjects` method and `query` param.
```javascript
bucket.getObjects({
  query: {
    type: 'pages',
    slug: 'home', // slugs are unique per locale
    locale: 'en'  // optional, if localization set on Objects
  },
  props: 'slug,title,content' // get only what you need
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```
## Further Documentation
See the [API reference](API.md) and [full documentation](https://docs.cosmicjs.com) for more requests and capabilities.

## License
This project is published under the [MIT](LICENSE) license.