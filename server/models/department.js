const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true // e.g., "Information Technology"
  },
  code: {
    type: String,
    required: true,
    unique: true // e.g., "IT", "CSE"
  }
}, { timestamps: true });

module.exports = mongoose.model("Department", departmentSchema);
