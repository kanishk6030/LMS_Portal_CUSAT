const express = require("express");
const dotenv = require("dotenv") 
dotenv.config();


const app = express();

app.get("/", (req, res) => {
  res.send("Hello to the LMS Portal");
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});