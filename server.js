const express = require("express");
require("dotenv").config({path:"./config/.env"})
const connectDB = require('./config/connectDB')

const StudentDB = require("./model/studentModel")

connectDB();
const app = express();

// add student to db
// const student = new StudentDB({name:"bassam",phone:"20202020",age:35});
// student.save((err)=>{
//     if(err) return console.log(err);
//     //save
// })

//find All 
const FindStudents = async()=>{
    try {
        const data = await StudentDB.find({});
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// FindStudents()

//find One 
const FindStudentByID = async()=>{
    const query = "627283a11117f86e31dfd103"
    try {
        const data = await StudentDB.findById(query);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// FindStudentByID()

//find One 
const FindStudentByName = async()=>{
    const name = "foulen"
    try {
        const data = await StudentDB.findOne({name});
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// FindStudentByName()

//find One and Update 

const Update = async()=>{
    const query = {name:"bassam"};
    try {
        const data = await StudentDB.findOneAndUpdate(query,{age:30})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// Update();

const Delete = async ()=>{
    const myQuery = {_id:"62728432d2577ba29126f27f"}
    try {
        const DeleteST = await StudentDB.findOneAndDelete(myQuery)
        console.log(DeleteST)

    } catch (error) {
        console.log(error)
    }
}

Delete();

const PORT = process.env.PORT || 7000 ;

app.listen(PORT,(err)=>{
    err? console.log(err)
    : console.log(`server is running on port ${PORT}`)
})