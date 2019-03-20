const db = require('../db/db')
const Post = require('../models/post')

class Posts { 
  buscarTodos (req, res) {
    return Post.findAll({ 
      order: ['data', 'ASC']
    }).then(posts => {
      res.send(posts)
    }).catch(err => console.log(err))
  }

  buscarPorId(req, res) {
    return Post.findOne({
      where: {
        id: req.params.post_id
      }
    }).then(post => {
      if(!post) return res.send('Não encontrado')
      res.send(post)
    }).catch(err => console.log(err))
  }

  criar(req, res) {    
    const post = { 
      titulo: req.body.titulo, 
      texto: req.body.texto,
      autora: 'Claudia SM',
      data: new Date().toLocaleString()
    }

    Post.create()
    .then(post => {
      console.log("POST: " + post);      
      res.send(post)
    }).catch(err => console.log(err))
  }  

  editar(req, res) {
    const id = parseInt(req.params.id, 10)

    db.forEach(post => {
      if (id === post.id) {
        post.titulo = req.body.titulo || post.titulo,
        post.texto = req.body.texto || post.texto,
        post.autora = post.autora,
        post.data = new Date().toLocaleString()
        return res.send(post)
      }
    })    
    res.send('Post não encontrado.')
  }

  excluir(req, res) {
    db.forEach((post, i) => {
      if (parseInt(req.params.id, 10) === post.id) {
        db.splice(i, 1)
        return res.send({ posts: db })
      }
    })
  }
}

const posts = new Posts()
module.exports = posts