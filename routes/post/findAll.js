const posts = Post => (req, res) => {
  return Post.findAll()
  .then(posts => {
    res.send(posts)
  })
}

module.exports = posts 