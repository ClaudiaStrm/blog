const Sequelize = require('sequelize')
const { DATABASE_URL } = require('./settings')

module.exports = {
  connect() {
    return new Sequelize(DATABASE_URL, {
      dialect: 'postgres',
      autoIncrement: true,
      define: {
        underscored: true,
        timestamps: false
      }
    })
  }
}