const dbconnect = require('./Mongodb')
const express = require('express')
const app=express();


app.use(express.json()); //This line sets up a middleware in Express to parse JSON data in the request body. This is important for handling JSON data sent in POST requests.
app.get('/abc',async(res,resp)=>{
    let data =await dbconnect();
    data= await data.find().toArray();//Mongoose's find and toArray methods to retrieve data from a MongoDB collection.
    resp.send(data)  //Finally, this line sends the retrieved data as the HTTP response when the '/abc' route is accessed.
})


app.post("/",async(req,resp)=>{
     let data= await dbconnect();
     let result = await data.insert({
       
name:
"Rea",
brand:
"5S",
Category :
"Mobile"
     })
    resp.send(result)  //send data
})
app.listen(5000)