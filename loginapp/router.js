var express=require('express');
var router=express.Router();
const credential={
    email:"admin@gmail.com",
    password:"admin123"
}

//login user
router.post('/login',(req,res)=>{
    console.log(req.body)
    if(req.body.email==credential.email && req.body.password==credential.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard')
    }
    else{
        res.end("invalid username")
    }
}); 

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }
    else{
        res.send("unauthorized user")
    }
})
module.exports=router;
router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title:"Express",logout:"logout successfully...!"})
        }
    })
})