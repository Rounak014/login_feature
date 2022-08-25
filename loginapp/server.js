// in this we learned cookies ,session


console.log("loading...")
console.log(__dirname)
const express=require('express')
const app =express();
const path=require('path')
const temp=path.join(__dirname,"views")
console.log(temp)
app.set("views",path.join(__dirname,"views"))
app.set('view engine','pug')

// session in express ⬇️
// const session=require("express-session");
// app.use(session({
//     secret:"secret key",
//     resave:true,
//     saveUninitialized:true
// }));
// app.get("/",(req,res)=>{
//     req.session.name="rounak"
//     return res.send("session set")
// })
// app.get("/session",(req,res)=>{
//     var name=req.session.name;
//     return res.send(name)
// })
// app.get("/destroy",(req,res)=>{
//     req.session.destroy(()=>console.log("session ended"))
//     return res.send(`session ended`);

// })


// cookies in express⬇️⬇️
// const cookies= require('cookie-parser');
// app.use(cookies());
// app.get("/",(req,res)=>{
//     res.send("cookies sent");
// });
// const user={
//     Age:29,
//     name:"ravikants"
// }
// app.get("/setuser",(req,res)=>{
//     res.cookie("userdata",user);
//     res.send("User data is added to cookie");
// })
// app.get("/getuser",(req,res)=>{
//     res.send(req.cookies);
// })
// app.get("/logout",(req,res)=>{
//     res.clearCookie(`userdata`)
//     res.send("cookie is cleared")
// })





// we use a middleware to store
//  the data which is sent by post request⬇️⬇️
app.use(express.urlencoded({
    extended:false
}))

// in order to store object data we use express.urlencoded
// middleware,to accept jason data we use express.json middleware 

app.get('/',(req,res)=>{
    res.render('index',{name:"Rounak",h1:"ola amigos ,we are learning expressjs"})
}).listen(1111,()=>console.log("server is started.."))
app.post("/form_submit",(req,res)=>{
    console.log(req.body)
    console.log("formsubmitted")
    const username=req.body.username
    const email=req.body.email
    const work=req.body.istrue
    res.end(`your name is :${username}and email is ${email}`)
})
 