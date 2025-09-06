const mongoose = require("mongoose");

const pyqSchema = new mongoose.Schema(
  {
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    year: { type: Number, required: true }, // e.g., 2022
    fileUrl: { type: String, required: true }, // link to PDF upload
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PYQ", pyqSchema);
