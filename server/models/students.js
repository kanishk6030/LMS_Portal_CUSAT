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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
