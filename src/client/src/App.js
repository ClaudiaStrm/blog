import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.callApi()
    .then(response => this.setState({ posts: response }))
    .catch(err => console.log(err))
  }

  callApi = async() => {
    const response = await fetch('/api/listar')
    const body = await response.json()
    
    if (response.status !== 200) throw Error(body.message)

    return body
  }

  render() {
    const { posts } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Oir</h1>
        </header>
        <ul className="posts">
          { posts.map(post => 
            <li key={ post.id } className="item-post">
              <h2 className="titulo-post">{ post.titulo }</h2>
              <p className="texto-post">{ post.texto }</p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App
