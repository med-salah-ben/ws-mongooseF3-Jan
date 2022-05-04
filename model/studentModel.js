const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const StudentSchema = new Schema({
    name:{type:String,required:true},
    phone:{type:String},
    age: {type:Number}
})

const StudentDB = model("Student", StudentSchema)

module.exports = StudentDB;