const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getCourseById,
  createCourse,
} = require("../controllers/courseController.js");

// List all courses
router.get("/", getAllCourses);

// Create a new course
router.post("/", createCourse);

// Get details of a course by ID
router.get("/:id", getCourseById);

module.exports = router;