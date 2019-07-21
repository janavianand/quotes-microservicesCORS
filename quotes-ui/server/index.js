const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use(express.static(path.join(__dirname, '..','/Public')))

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..','Public/index.html'));
});

app.use((err,req,res,next)=>{
  console.error(err)
  console.error(err.stack)
  res.status(error.status || 500).send(err.message || 'Internal server error.')
})

let PORT = 5000;

async function startServer(){
  app.listen(PORT,()=>{
    console.log(`Quotes UI Listening at ${PORT}`)
  })
}

startServer();

