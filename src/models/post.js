const sequelize = require('sequelize')

module.exports = db => db.define('post', {
  autora: sequelize.STRING,
  titulo: sequelize.STRING,
  texto: sequelize.TEXT,
  dataCriacao: sequelize.DataTypes.DATE,
  dataModificacao: sequelize.DataTypes.DATE
})
