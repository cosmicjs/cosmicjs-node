const Cosmic = require('./index')
const api = Cosmic({
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNwaXJvbnlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkdVRyb1RmMnZaa05rYzZrUzdqSG53dU1zTTZINWs1M1FwbTJqYWdyYlUvb0JRNU42Z3Brbi4iLCJpYXQiOjE2MTQ0NTYyOTl9.kiDAuo55TxucxGLjQ3NUrfd8DikpcoHJurNocoQVPTU'
})
const bucket = api.bucket({
  slug: 'next-merge-live-staging',
  read_key: 'crvax6wakPEGYgY3RBoAnVs1pgMJDx3hvORx3isg7KaOIy3jC7',
  write_key: 'n5MbD59UPBoVpyqi6B6DnOzAvZiwMKLKRGZwObSssI3u4Z9ETU'
})
const run = async() => {
  // const posts = (await bucket.getObjects({
  //   props: 'id,title',
  //   query: {
  //     type: 'posts'
  //   }
  // })).objects
  // console.log(posts)
  // const post = (await bucket.getObject({
  //   props: 'title',
  //   id: '60105b2ed026d40008d745e6'
  // })).object
  // console.log(post)
  // const revisions = (await bucket.getObjectRevisions({
  //   props: 'title',
  //   id: '60105b2ed026d40008d745e6'
  // })).revisions
  // console.log(revisions)
  // const post = (await bucket.addObject({
  //   title: 'NPM Object',
  //   type: 'posts'
  // })).object
  // console.log(post)
  // const post = await bucket.editObject({
  //   id: '603aa669bea9270008b2ec67',
  //   title: 'NEW NPM Object'
  // })
  // const post = await bucket.deleteObject({
  //   id: '603aa669bea9270008b2ec67'
  // })
  // console.log(post)
  // const object_types = await bucket.getObjectTypes()
  // console.log(object_types)
  // const object_type = await bucket.getObjectType({ slug: 'posts' })
  // console.log(object_type)
  // const object_type = await bucket.addObjectType({ slug: 'sats', title: 'Sats' })
  // console.log(object_type)
  // const object_type = await bucket.editObjectType({ slug: 'sats', title: 'NEW Sats' })
  // console.log(object_type)
  // const object_type = await bucket.deleteObjectType({ slug: 'sats' })
  // console.log(object_type)
  // const media = await bucket.getMedia({ limit: 2 })
  // const single_media = await bucket.getSingleMedia({ id: '6038150ead9d8a0ee8ebe290' })
  // console.log(single_media)
  // const delete_media = await bucket.deleteMedia({ id: '6038150ead9d8a0ee8ebe290' })
  // console.log(delete_media)
}
run();