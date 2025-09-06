const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    deadline: { type: Date, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", required: true },

    submissions: [
      {
        student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
        fileUrl: { type: String }, // link to submitted file
        submittedAt: { type: Date, default: Date.now },
        grade: { type: String }, // optional grading
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", assignmentSchema);
