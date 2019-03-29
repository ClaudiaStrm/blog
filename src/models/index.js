const post = require('./post')

module.exports = db => {
  const Post = post(db)

  return { Post }
}