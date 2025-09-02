// server/server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Make sure to install dotenv: npm install dotenv

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('LMS Portal Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});