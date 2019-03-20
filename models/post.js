const sequelize = require('sequelize')
const db = require('../config/database')

const Post = db.define('post', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  autora: sequelize.STRING,
  titulo: sequelize.STRING,
  texto: sequelize.TEXT,
  data: sequelize.DATEONLY
})


module.exports = Post