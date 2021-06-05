const db = require("../models");
const Student = db.student;

exports.saveNewStudent = (req,res)=>{
    let data = req.body;
    let student = new Student();
    for(let p in data){
        student[p] = data[p];
    }
    student.save((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Student created Successfully",
            data:response
        })     
    })
}

exports.getAllStudents = (req,res)=>{
    Student.find((err,students)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Student retrieved Successfully",
            data:students
        })
    })
}

exports.updateStudent = (req,res)=>{
    Student.updateOne({_id:req.body.id},req.body,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Student Updated Successfully",
            data:response
        })  
    })
}

exports.deleteStudent = (req,res)=>{
    Student.deleteOne({_id:req.params.sid},(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Student Deleted Successfully",
            data:response
        })
    })
}