module.exports = Post => (req, res) => {
  return Post
  .create({
    titulo: req.body.titulo, 
    texto: req.body.texto,
    autora: 'Claudia SM',
    dataCriacao: new Date().getTime(),
    dataModificacao: new Date().getTime()
  })
  .then(post => {
    res.send(post)
  })
}