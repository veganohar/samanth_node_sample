const express = require("express");
const app = express();
const port = 3000;
const bodyparser = require("body-parser");
const mongoose = require("mongoose");


app.use(bodyparser.json());


mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
    process.exit();    
})

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(port,()=>{
    console.log("Server running");
}) 

app.post("/dataBody",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.post("/dataParams/:name/:age",(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})

app.post("/dataQuery",(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})