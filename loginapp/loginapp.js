console.log("loading...")
const express=require('express')
const path=require('path')
const app =express();
const {v4:uuidv4}=require("uuid");
 
const router=require('./router')

// body-parser is an npm library used to process data sent through an HTTP request body
// const bodyparser=require('body-parser');
const session = require('express-session')


app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
 
// to store the post request data
app.use(express.urlencoded({
    extended:false
}))

app.use('/route',router);


// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({extended:true}))



app.set("views",path.join(__dirname,"views"))
app.set('view engine','ejs')
//load static assets
app.use('/static',express.static(path.join(__dirname,"public")))
app.use('/assets',express.static(path.join(__dirname,"public/assets")))



app.get("/",(req,res)=>{
    res.render('base',{title:"Login system"})
}).listen(8888,()=>console.log("server has started"));
