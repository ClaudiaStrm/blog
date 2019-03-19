const db = require('../db/db')

class Posts { 
  buscarTodos = (Post) => (req, res) => {
    return Post.findAll({ 
      order: ['data', 'ASC']
    }).then(posts => {
      res.send(posts)
    }).catch(err => console.log(err))
  }

  buscarPorId = Post => (req, res) => {
    return Post.findOne({
      where: {
        id: req.params.post_id
      }
    }).then(post => {
      if(!post) return res.send('Não encontrado')
      res.send(post)
    }).catch(err => console.log(err))
  }

  criar = Post => (req, res) => {
    return Post.create({
      
    })
    const post = {
      id: db.length + 1,
      titulo: req.body.titulo, 
      texto: req.body.texto,
      autora: 'Claudia SM',
      data: new Date().toLocaleString()
    }  

    if (!req.body.titulo) return (res.send('Titulo obrigatório'))
    if (!req.body.texto) return (res.send('Texto obrigatório'))

    db.push(post)
    res.send({ posts: db })
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