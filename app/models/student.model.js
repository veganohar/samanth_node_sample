const mongoose = require("mongoose");

const Student = mongoose.model(
    "Student",
    new mongoose.Schema({
        name:String,
        phone:Number,
        age:Number,
        grade:Number,
        city:String,
        createdOn:{
            type:Date,
            default:Date.now
        }
    })
)

module.exports = Student;