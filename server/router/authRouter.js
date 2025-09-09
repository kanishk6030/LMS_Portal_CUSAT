const express = require("express");
const router = express.Router();
const{ register , login ,google,getMe } = require('../controllers/authController');
const requireAuth = require("../middlewares/requireAuth");

// @route   POST /api/auth/register
// @desc    Register a new user (Student or Faculty)
// @access  Public
router.post("/register", register);

// @route   POST /api/auth/login
// @desc    Login user and return JWT token
// @access  Public
router.post("/login", login);

// @route   POST /api/auth/google
// @desc    Login/Register using Google OAuth
// @access  Public
router.post("/google", google);

// @route   GET /api/auth/me
// @desc    Get current logged-in user details
// @access  Private (Requires JWT)
router.get("/me", requireAuth, getMe);


module.exports = router;
