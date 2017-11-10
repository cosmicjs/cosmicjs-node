[![Cosmic JS Logo](https://cosmicjs.com/images/marketing/logo-w-brand.jpg)](https://cosmicjs.com/)<br><br>
This is the Official Cosmic JS JavaScript Client which allows you to easily create, read, update and delete content from your Cosmic JS Buckets.  Includes `cosmicjs.browser.min.js` for easy integration in the browser.

### Getting started
Go to [https://cosmicjs.com](https://cosmicjs.com), create an account and set up a Bucket.

#### Install
```
npm i cosmicjs
```

#### Usage
##### Include and Config
```javascript
import Cosmic from 'cosmicjs';

/* Configure
================================ */
const config = {
  bucket: {
    slug: 'your-bucket-slug',
    read_key: '', // add read_key if added to your Cosmic JS Bucket settings
    write_key: '' // add write_key if added to your Cosmic JS Bucket settings
  }
};
```
##### Get Bucket
```javascript
Cosmic.getBucket(config, (error, response) => {
  // console.log(response);
});
```
##### Get Objects
```javascript
Cosmic.getObjects(config, (error, response) => {
  // console.log(response);
});
```
##### Get Objects by Type
```javascript
const params = {
  type_slug: 'posts',
  limit: 5,
  skip: 0,
  sort: '-created_at', // optional, if sort is needed. (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
  locale: 'en' // optional, if localization set on Objects
  status: 'all' // optional, if need to get draft Objects
};
Cosmic.getObjectsByType(config, params, (error, response) => {
  // console.log(response);
});
```
##### Get Objects by Search
```javascript
// Search by Object Metafield
const params = {
  type_slug: 'posts',
  metafield_key: 'author',
  metafield_object_slug: 'carson-gibbons',
  limit: 5,
  skip: 0,
  sort: '-created_at', // optional, if sort is needed. (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
  locale: 'en' // optional, if localization set on Objects,
  status: 'all' // optional, if need to get draft Objects,
};
// Search by Metafield Value
const params = {
  type_slug: 'posts',
  metafield_key: 'headline',
  metafield_value: 'Hello World',
  limit: 5,
  skip: 0,
  sort: '-created_at', // optional, if sort is needed. (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
};
// Search by Metafield Has Value
const params = {
  type_slug: 'posts',
  metafield_key: 'headline',
  metafield_has_value: 'World',
  limit: 5,
  skip: 0,
  sort: '-created_at', // optional, if sort is needed. (use one option from 'created_at,-created_at,modified_at,-modified_at,random')
};
Cosmic.getObjectsBySearch(config, params, (error, response) => {
  // console.log(response);
});
```
##### Get Object
```javascript
const params = {
  slug: 'object-slug'
}
Cosmic.getObject(config, params, (error, response) => {
  // console.log(response);
});
```
##### Add Object
```javascript
const params = {
  write_key: config.bucket.write_key,
  type_slug: 'pages',
  title: 'Test Title',
  content: 'Test Content'
};
Cosmic.addObject(config, params, (error, response) => {
  // console.log(response);
});
```
##### Edit Object
```javascript
const params = {
  write_key: config.bucket.write_key,
  slug: 'test-title',
  type_slug: 'pages',
  title: 'New Title',
  content: 'New Content'
};
Cosmic.editObject(config, params, (error, response) => {
  // console.log(response);
});
```
##### Delete Object
```javascript
const params = {
  write_key: config.bucket.write_key,
  slug: 'test-title'
};
Cosmic.deleteObject(config, params, (error, response) => {
  // console.log(response);
});
```
##### Get Media
```javascript
Cosmic.getMedia(config, (error, response) => {
  // console.log(response);
});
```
##### Add Media
```javascript
const params = {
  media: FILE_DATA,
  folder: 'your-folder-slug'
}
Cosmic.addMedia(config, params, (error, response) => {
  // console.log(res)
})
```
##### Delete Media
```javascript
const params = {
  media_id: MEDIA_ID,
  write_key: config.bucket.write_key,
}
Cosmic.deleteMedia(config, params, (error, response) => {
  // console.log(res)
})
```
#### Easy Browser Example
```html
<!DOCTYPE html>
<html>
<head>
  <title>Cosmic JS Easy Browser Example</title>
</head>
<body>
<h1 id="title">If you see this, something isn't working...</h1>
<div id="content"></div>
<div id="metafields"></div>
<script src="cosmicjs.browser.min.js"></script>
<script>
var config = {
  bucket: {
    slug: 'your-bucket-slug'
  },
  object: {
    slug: 'home'
  }
};
Cosmic.getObject(config, config.object, (err, res) => {
  var object = res.object;
  document.getElementById('title').innerHTML = object.title;
  document.getElementById('content').innerHTML = object.content;
  var metafields = object.metafields;
  var items = '';
  metafields.forEach(function(metafield){
    items += '<h2>' + metafield.title + '</h2>';
    items += '<img width="300" src="' + metafield.url + '"/>';
    items += '<br><br>';
  });
  document.getElementById('metafields').innerHTML = items;
});
</script>
</body>
</html>
```
