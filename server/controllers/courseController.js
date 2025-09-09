const Course = require("../models/course.js");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    return res.status(200).json(course);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    return res.status(201).json(newCourse);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
