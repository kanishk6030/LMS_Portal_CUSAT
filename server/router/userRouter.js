const express = require("express");
const router = express.Router();
const { getAllUsers,getUserById } = require( "../controller/userController.js");
const requireAuth = require("../middlewares/requireAuth.js");

router.get("/",getAllUsers);
router.get("/:id",requireAuth,getUserById);

