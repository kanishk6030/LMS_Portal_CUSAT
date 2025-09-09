const Student = require("../models/students.js");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).json(students);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    return res.status(200).json(student);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { attendance } = req.body; // { date: "2025-09-07", status: "present" }
    const student = await Student.findByIdAndUpdate(
      id,
      { $push: { attendance } },
      { new: true }
    );
    return res.status(200).json(student);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
