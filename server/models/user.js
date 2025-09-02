const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is mandatory"]
    },
    email:{
        type: String,
        required: true,
        match: [/.+\@.+\..+/, "Email is not valid"]
    },
    password:{
        type:String,
        required:true,
    },
    authProvider: { 
        type: String, 
        enum: ["local", "google"], 
        default: "local" 
    },
    role: {
        type: String,
        enum: ['user', 'faculty', 'admin'], // only three roles
        default: 'user'
    },
    department:{
        default: "General",
        type:String,
    },
    semester:{
        default: 1,
        type:Number,
        min:1,
        max:8,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("User",userSchema);