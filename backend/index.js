const express = require('express');
const cors = require('cors') //to access serve from different domains.
const bodyParser = require('body-parser')
const router =require('./routes/router')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

const corsOptions ={
    origin: '*',
    credentials: true,
    optionsSuccessStatus : 200
}

app.use(cors(corsOptions))
app.use('/',router)//the last one always not to crash



const port =4000
const server = app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})