module.exports = Post => (req, res) => {
  return Post
  .findOne({
    where: {
      id: req.params.post_id
    }
  }).then(post => {
    if(!post) return res.send('Post não encontrado.')
    post.update({
      titulo: req.body.titulo,
      texto: req.body.texto,
      dataModificacao: new Date().getTime()
    })
    .then(post => {
      res.send(post)
    })
  })
}
