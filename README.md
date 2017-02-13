[![Cosmic JS Logo](https://cosmicjs.com/images/marketing/logo-w-brand.jpg)](https://cosmicjs.com/)<br><br>
This is the Official Cosmic JS JavaScript Client which allows you to easily create, read, update and delete content from your Cosmic JS buckets.  Includes `cosmicjs.browser.min.js` for easy integration in the browser.

### Getting started
Go to [https://cosmicjs.com](https://cosmicjs.com), create an account and set up a bucket.

#### Install
```
npm install cosmicjs
```

#### Usage

```javascript
/* Configure
================================ */
var config = {};
config.bucket = {
  slug: 'your-bucket-slug',
  read_key: '', // add read_key if added to your Cosmic JS bucket settings
  write_key: '' // add write_key if added to your Cosmic JS bucket settings
};
var Cosmic = require('cosmicjs');

/* Get bucket
================================ */
Cosmic.getBucket(config, function(error, response){
  // console.log(response);
});

/* Get objects
================================ */
Cosmic.getObjects(config, function(error, response){
  // console.log(response);
});

/* Get objects by type
================================ */
var params = {
  type_slug: 'posts',
  limit: 5,
  skip: 0
};
Cosmic.getObjectType(config, params, function(error, response){
  // console.log(response);
});

/* Get object
================================ */
var params = {
  slug: 'object-slug'
}
Cosmic.getObject(config, params, function(error, response){
  // console.log(response);
});

/* Get media
================================ */
Cosmic.getMedia(config, function(error, response){
  // console.log(response);
});

/* Add object
================================ */
var params = {
  write_key: config.bucket.write_key,
  type_slug: 'pages',
  title: 'Test Title',
  content: 'Test Content'
};
Cosmic.addObject(config, params, function(error, response){
  // console.log(response);
});

/* Edit object
================================ */
var params = {
  write_key: config.bucket.write_key,
  slug: 'test-title',
  type_slug: 'pages',
  title: 'New Title',
  content: 'New Content'
};
Cosmic.editObject(config, params, function(error, response){
  // console.log(response);
});

/* Delete object
================================ */
var params = {
  write_key: config.bucket.write_key,
  slug: 'test-title'
};
Cosmic.deleteObject(config, params, function(error, response){
  // console.log(response);
});
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
