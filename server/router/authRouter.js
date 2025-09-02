const express = require("express");
const router = express.Router();
const{ register , login ,google } = require('../controller/authController');

router.post("/register", register);
router.post("/login", login);
router.post("/google", google); 

module.exports = router;
