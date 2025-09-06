const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ["Present", "Absent"], required: true },
    markedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", attendanceSchema);
