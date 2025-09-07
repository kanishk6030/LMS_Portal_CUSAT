const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  updateAttendance,
  getAttendance,
  getAssignments,
} = require("../controllers/studentController.js");

// List all students
router.get("/", getAllStudents);

// Get student details by ID
router.get("/:id", getStudentById);

// Mark/update attendance
router.put("/:id/attendance", updateAttendance);

// Get attendance record
router.get("/:id/attendance", getAttendance);

// List assignments submitted by student
router.get("/:id/assignments", getAssignments);

module.exports = router;