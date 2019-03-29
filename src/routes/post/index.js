const create = require('./create')
const listPosts = require('./findAll')
const get = require('./get')
const update = require('./update')
const destroy = require('./destroy')

module.exports = (Post, router) => {
  router.post('/api/criar', create(Post))
  router.get('/api/listar', listPosts(Post))
  router.get('/api/buscar/:post_id', get(Post))
  router.post('/api/editar/:post_id', update(Post))
  router.post('/api/delete/:post_id', destroy(Post))
}