const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/index')
const Sequelize = require('sequelize')
const database = require('./database')
const { PORT } = require('./settings')

const app = express()
const databaseConnection = database.connect()

const startApplication = () => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(router)
  
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${ PORT }`)  
  })

}

databaseConnection
  .sync()
  .then(startApplication)
  .catch((error) => {
    console.trace('Erro ao iniciar a aplicação: ', error.message)
    process.exit(1)
  })