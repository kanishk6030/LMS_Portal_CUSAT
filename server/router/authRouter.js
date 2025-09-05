const express = require("express");
const router = express.Router();
const{ register , login ,google,getMe } = require('../controller/authController');
const jwtAuth = require("../middlewares/jwtAuth");

router.post("/register", register);
router.post("/login", login);
router.post("/google", google);
router.get("/me", jwtAuth, getMe);

module.exports = router;
