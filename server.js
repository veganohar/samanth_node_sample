const express = require("express");
const app = express();
const port = 3000;
const bodyparser = require("body-parser");
const db = require("./app/models");
const dbconfig = require("./app/config/db.config");

app.use(bodyparser.json());


db.mongoose.connect(`mongodb://${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`, {
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

require("./app/routes/test.route")(app);
require("./app/routes/student.route")(app);