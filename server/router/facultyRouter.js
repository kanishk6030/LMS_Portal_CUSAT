const express = require("express");
const router = express.Router();

const {
  getAllFaculty,
  getFacultyById,
  uploadNotes,
  // createAssignment,
  // markAttendance,
} = require("../controllers/facultyController");

// List all faculty
router.get("/", getAllFaculty);

// Get faculty details by ID
router.get("/:id", getFacultyById);

// Upload notes
router.post("/:id/notes", uploadNotes);

// Create assignment for course
// router.post("/:id/assignments", createAssignment);

// Mark attendance for a student
// router.put("/:id/attendance/:studentId", markAttendance);

module.exports = router;