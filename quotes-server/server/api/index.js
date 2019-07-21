const router = require('express').Router()
const Sequelize = require('sequelize')
const {Quotes,Authors} = require('../db/models')
const db = require('../db')


router.get('/quote',async(req,res,next)=>{
  try {
    let len = await db.query('SELECT COUNT(*) FROM quotes');
    len = len[0][0].count
    let id = Math.floor((Math.random()*(len))+1)
    const quote = await Quotes.findByPk(id,{
      include:[{model:Authors}]
    })
    res.status(200).json(quote)
  } catch (error) {
    console.error(error)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
module.exports = router
