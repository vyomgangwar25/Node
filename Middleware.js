const express=require('express')
 
const app=express();

 const reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("please provide age")
    }
    else if(req.query.age<18)
    {
        resp.send("age is less than 18")
    }
    else {
        next();
    }
 }
 app.use(reqFilter)

 app.get('/',(req,resp)=>{
   resp.send('welcome to home page')
 })
 app.get('/users',(req,resp)=>{
    resp.send('welcome to users page')
 })

 

 
app.listen(5000);