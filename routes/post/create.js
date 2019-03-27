module.exports = Post => (req, res) => {
  return Post
  .create({
    titulo: req.body.titulo, 
    texto: req.body.texto,
    autora: 'Claudia SM'
  })
  .then(post => {
    res.send(post)
  })
}