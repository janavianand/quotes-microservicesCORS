const Quotes = require('./quotes')
const Authors = require('./authors')

Quotes.belongsTo(Authors)

module.exports = {Quotes,Authors}
