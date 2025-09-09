const Assignment = require("../models/assignment.js");

exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    return res.status(200).json(assignments);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getAssignmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.findById(id);
    if (!assignment) return res.status(404).json({ message: "Assignment not found" });
    return res.status(200).json(assignment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.createAssignment = async (req, res) => {
  try {
    const newAssignment = new Assignment(req.body);
    await newAssignment.save();
    return res.status(201).json(newAssignment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.submitAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentId, fileUrl } = req.body;
    const assignment = await Assignment.findByIdAndUpdate(
      id,
      { $push: { submissions: { studentId, fileUrl } } },
      { new: true }
    );
    return res.status(200).json(assignment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
