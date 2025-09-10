const mongoose = require("mongoose");

const timeTableSchema = new mongoose.Schema({
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",  // link to department.js
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course", // or Subject model if you have one
    required: true
  },
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty", // link to faculty.js
    required: true
  },
  dayOfWeek: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    required: true
  },
  startTime: {
    type: String, // "09:00"
    required: true
  },
  endTime: {
    type: String, // "10:00"
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("TimeTable", timeTableSchema);
