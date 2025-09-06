const express = require('express'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user.js");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generate JWT
const generateToken = (user) => {
  return jwt.sign({ 
    id: user._id, 
    email: user.email 
    }, 
    process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};

// Register with email/password
exports.register =  async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({ name, email, password: hashedPassword, authProvider: "local" });
    await user.save();

    const token = generateToken(user);
    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login with email/password
exports.login =  async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = generateToken(user);
    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Google Login
exports.google = async (req, res) => {
// console.log(req.body)
  try {
    const { credential }  = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const { name, email } = ticket.getPayload();

    let user = await User.findOne({ email });

    // console.log(user);

    // Created a random password  for the Google Auth user
    const randomPassword = crypto.randomBytes(16).toString("hex");
      // Hash it before saving
      const hashedPassword = await bcrypt.hash(randomPassword, 12);

    if (!user) {
      user = new User({ 
        name, 
        email,
        password: hashedPassword,
        authProvider: "google",
       });
      await user.save();
    }

    const token = generateToken(user);
    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ error: "Google authentication failed" });
  }
};

exports.getMe = async(req,res)=>{
  try {
    const user = await User.findById(req.user.id).select("-password");
    if(!user) return res.status(400).json({error:"User not found"});
    res.json({user});
  } catch (error) {
    res.status(400).json({error:"User not found"});
  }
};
