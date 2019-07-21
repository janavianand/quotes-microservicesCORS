const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./db')


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', require('./api'))

app.use((err,req,res,next)=>{
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

let PORT = 5001;

async function startServer(){
  await db.sync()
  app.listen(PORT,()=>{
    console.log(`Quotes Server Listening at ${PORT}`)
    db.sync()
  })
}

startServer();

