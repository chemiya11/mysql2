require("dotenv").config();
const express = require("express");

const route = require("./routes/index");
const cors = require('cors')
const port = ( 3000)

const app = express();
const PORT = process.env.PORT ;

global.__basedir = __dirname;
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(express.static("frontend"));
app.use('/api', route)

app.listen(PORT,(error)=>{
  if(error)
  {console.log('error al iniciar el servidor: '+error)}
  else{
      console.log('servidor iniciado en el prueto: '+PORT)
  }
})



/***************************** */









