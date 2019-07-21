const Sequelize = require('sequelize')
const db = require('../index')

const Quotes = db.define('quotes',{
  quote:{
    type: Sequelize.TEXT,
    allowNull:false,
    validate:{
      notEmpty:true
    }
  }
})
module.exports = Quotes
