const express = require('express')
const app=express();
require('./src/db/mongoose.js')
const port = process.env.PORT
const credential = require('./src/Routers/credential')
const metaData = require('./src/Routers/metaData')
const document = require('./src/Routers/documents')
const bodyParser=require('body-parser')
const passport=require('passport')
const session = require('cookie-session');
const cors = require('cors')
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}));

app.use(passport.initialize());
app.use(passport.session());

console.log("hwere 1")

app.use(session({
  secret: process.env.SECRET ,
  resave: false,
  saveUninitialized: false
}))

console.log("hwere 2")
app.use('/credential',credential);
app.use('/metaData',metaData);
app.use('/document',document);

console.log("hwere 3")

app.use(express)

__dirname=path.resolve()

console.log("hwere 4")

console.log((path.join(__dirname,'/client/build')))
console.log(__dirname,'client','build','index.html')


if(process.env.NODE_ENV == "production")
{
    app.use(express.static(path.join(__dirname,'/client/build')))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
    console.log("hwere 5")
}
console.log("hwere 6")



app.listen(port,()=>{
    console.log("Server is up on port ",port);
})