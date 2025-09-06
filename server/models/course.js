const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: String,
  code: String,   // e.g., "IT101"
  semester: Number,
  branch: String
});

module.exports = mongoose.model("Subject", subjectSchema);