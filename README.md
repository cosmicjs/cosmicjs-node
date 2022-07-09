<p align="center">
  <a href="https://www.cosmicjs.com"><img src="https://imgix.cosmicjs.com/b811fa50-ffa7-11ec-965a-abec43f7da6e-header-big.png?w=1000&auto=format" alt="Cosmic" width="100%"></a>
</p>
<p align="center">
	<a href="https://www.npmjs.com/package/cosmicjs"><img src="https://badge.fury.io/js/cosmicjs.svg" alt="npm version"></a>
	<a href="https://circleci.com/gh/cosmicjs/cosmicjs-node"><img src="https://circleci.com/gh/cosmicjs/cosmicjs-node.svg?style=shield" alt="CircleCI"></a>
</p>

## Content management made simple, fast, and secure.

[Cosmic](https://www.cosmicjs.com/) is a [headless CMS](https://www.cosmicjs.com/headless-cms) (content management service) that provides a web dashboard to create content and an API toolkit to deliver content to any website or application. Build nearly any type of content model using our admin dashboard then deliver your content powered by our [reliable infrastructure](https://cosmicjs.statuspage.io/) and global CDN.

### Save time and launch faster

Avoid the pain of building, configuring, and maintaining your own CMS infrastructure. Cosmic has all of the features you need out of the box optimized and ready. Plug into Cosmic, save time, and launch your content-powered apps faster.

### **Features include**

🛠️&nbsp;&nbsp;Powerful content modeling<br>
🔍&nbsp;&nbsp;Flexible queries<br>
⚡&nbsp;&nbsp;Customized API response<br>
🌎&nbsp;&nbsp;Localization<br>
🎨&nbsp;&nbsp;Image optimization<br>
…and more! [See more features →](https://www.cosmicjs.com/features)

## Get started

Start by going to [https://www.cosmicjs.com](https://www.cosmicjs.com/), create your **free account** and set up a project. You can get started from scratch, or start with a [pre-built template](https://www.cosmicjs.com/apps). Then follow the steps below to use this NPM package.

## Install

Install the Cosmic NPM module:

```bash
pnpm install cosmicjs
# OR
yarn add cosmicjs
# OR
npm install cosmicjs
```

## Import

Import Cosmic into your app:

```jsx
const Cosmic = require("cosmicjs");
const api = Cosmic();
```

## Connect

In your [Cosmic admin dashboard](https://app.cosmicjs.com/login) go to _Your Bucket > Settings > API Access_ and get your Bucket slug and read key then set the variables in your app to connect to your Bucket:

```jsx
const bucket = api.bucket({
  slug: "YOUR_BUCKET_SLUG",
  read_key: "YOUR_BUCKET_READ_KEY",
});
```

## Get content

Delivering content to your app is simple by using the `getObjects` method.

**Get multiple Objects**

Uses `getObjects` method with a `query` param. Additional options noted below.

```jsx
const params = {
  query: { type: "products" },
  props: "title,slug,metadata", // response properties
  limit: 10, // number of Objects returned
};
const data = await bucket.getObjects(params);
```

**Get single Object by slug**

Uses the `getObjects` method and `query` param.

```jsx
const params = {
  query: {
    type: "pages",
    slug: "home",
    locale: "en", // optional, if localization set on Objects
  },
  props: "title,slug,metadata",
};
const data = await bucket.getObjects(params);
const home = data[0]; // returns array
```

### More examples

For more in-depth guides on getting Cosmic data into your app, you can view these [basic query examples](https://docs.cosmicjs.com/examples/basic-queries). When you are ready to level up, check out [advanced query examples](https://docs.cosmicjs.com/examples/advanced-queries).

## Add content

The Cosmic API is fully CRUD (create, read, update, delete) capable, enabling user-generated content and file uploads. Check out the [add Object](https://docs.cosmicjs.com/examples/add-object) and [add media](https://docs.cosmicjs.com/examples/add-media) examples in the documentation.

## Further documentation

See the [full documentation](https://docs.cosmicjs.com/) for more requests and capabilities.

## Community support

For general help, please refer to [the official Cosmic documentation](https://docs.cosmicjs.com). For additional help, you can use one of these channels to ask a question:

- [Slack](https://www.cosmicjs.com/community) (For live discussions with the Cosmic community and team)
- [GitHub](https://github.com/cosmicjs/cosmicjs-node) (Bug reports, contributions)
- [Twitter](https://twitter.com/cosmicjs) (Get the latest news about Cosmic features and notifications)
- [YouTube](https://www.youtube.com/cosmicjs) (Learn from video tutorials)

## License

This project is published under the [MIT](https://github.com/cosmicjs/cosmicjs-node/blob/HEAD/LICENSE) license.
