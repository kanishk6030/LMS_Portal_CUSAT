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
        enum: ['student', 'faculty', 'admin'], // only three roles
        default: 'user'
    },
})

module.exports = mongoose.model("User",userSchema);