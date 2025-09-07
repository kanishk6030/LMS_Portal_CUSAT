const express = require("express");
const router = express.Router();
const {
  getAllAssignments,
  getAssignmentById,
  createAssignment,
  submitAssignment,
} = require("../controllers/assignmentController.js");

// List all assignments
router.get("/", getAllAssignments);

// Create assignment (faculty)
router.post("/", createAssignment);

// Get assignment details by ID
router.get("/:id", getAssignmentById);

// Submit assignment (student)
router.post("/:id/submit", submitAssignment);

module.exports = router;