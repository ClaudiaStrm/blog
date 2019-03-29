module.exports = Post => (req, res) => {
  return Post.findOne({
    where: {
      id: req.params.post_id
    }
  })
  .then(post => {
    if (!post) return res.send('Não encontrado.')
    res.send(post)
  })
}
