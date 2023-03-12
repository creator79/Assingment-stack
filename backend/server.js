// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const  router =require("././router")
// require('dotenv').config()



// const app = express()
// const port = 5000


// app.use(express.json())
// app.use(cors())
// app.use(router)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)

  
// })




//$ new code goes here

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const  router =require("././router");
require ('dotenv').config();

app.use(express.json())
app.use(cors())
app.use(router)
app.use(express.urlencoded({ extended: true }));
 
app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 5000;

app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => console.log(`Server running on port ${port}`));
