const create = require('./create')
const listPosts = require('./findAll')
const get = require('./get')

module.exports = (Post, router) => {
  router.post('/api/post', create(Post))
  router.get('/api/posts', listPosts(Post))
  router.get('/api/post/:post_id', get(Post))
}