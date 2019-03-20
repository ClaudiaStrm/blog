
const Sequelize = require('sequelize');

module.exports =  new Sequelize('blog', 'blog', 'blog', {
  host: 'localhost',
  dialect: 'postgres'
});