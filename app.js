const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database')
const { PORT } = require('./settings')

const modelsInitializer = require ('./models')
const routesInitializer = require ('./routes')

const app = express()
const databaseConnection = database.connect()

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)


const startApplication = () => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/', routes)

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