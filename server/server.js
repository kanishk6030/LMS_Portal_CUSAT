const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongoDb");
const cors = require("cors");
const cookieParser = require("cookie-parser")
dotenv.config();
const authRouter = require("./router/authRouter");

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ 
    origin: "http://localhost:5173" || "*",
    credentials: true
}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello to the LMS Portal");
});

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});