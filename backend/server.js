const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const  router =require("././router")
require('dotenv').config()



const app = express()
const port = 5000


app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

   
})