const Faculty = require("../models/faculty.js");

exports.getAllFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    return res.status(200).json(faculty);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getFacultyById = async (req, res) => {
  try {
    const { id } = req.params;
    const faculty = await Faculty.findById(id);
    if (!faculty) return res.status(404).json({ message: "Faculty not found" });
    return res.status(200).json(faculty);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.uploadNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { note } = req.body; // could be a file URL or text
    const faculty = await Faculty.findByIdAndUpdate(
      id,
      { $push: { notes: note } },
      { new: true }
    );
    return res.status(200).json(faculty);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
