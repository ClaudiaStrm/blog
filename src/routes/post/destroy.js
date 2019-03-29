module.exports = Post => (req, res) => {
  return Post
  .destroy({
    where: {
      id: req.params.post_id
    }
  }).then(() => res.send('Postagem excluída'))
}

