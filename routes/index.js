const express = require('express')
const post = require('./post')

const router = express.Router()

router.get('/api/posts', post.buscarTodos)
router.get('/api/post/:id', post.buscarPorId)
router.post('/api/novo-post', post.criar)
router.put('/api/post/:id', post.editar)
router.delete('/api/post/:id', post.excluir)

module.exports = router