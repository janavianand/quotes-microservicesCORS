const Sequelize = require('sequelize')
const db = require('../index')

const Authors = db.define('authors',{
  author:{
    type:Sequelize.STRING,
    defaultValue: 'Anonymous',
  }
})

module.exports = Authors
