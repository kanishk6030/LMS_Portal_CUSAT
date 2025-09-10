const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,      // e.g., "Compiler Design"
  },
  code: {
    type: String,
    required: true,      // e.g., "CS301"
    unique: true
  },
  credits: {
    type: Number,
    default: 4           // optional, useful if you track credits
  },
  semester: {
    type: Number,
    required: true       // e.g., 5 (S5)
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",   // link to department.js
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Subject", subjectSchema);
