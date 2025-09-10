const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rollNo: String,
    branch: String,
    semester: Number,
    year: Number,
    registerNumber: Number,
    section: String,
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
