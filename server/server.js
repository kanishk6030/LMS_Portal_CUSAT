const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongoDb");
const cors = require("cors");
const cookieParser = require("cookie-parser")
dotenv.config();
const authRouter = require("./router/authRouter");
const userRouter = require("./router/userRouter");
const studentRouter = require("./router/studentRouter");
const facultyRouter = require("./router/facultyRouter");
const courseRouter = require("./router/courseRouter");
const assignmentRouter = require("./router/assignmentRouter");

const app = express();

connectDB();
app.use(cors({ 
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello to the LMS Portal");
});

app.use("/api/auth", authRouter);
app.use("/api/user",userRouter);
app.use("/api/student",studentRouter);
app.use("/api/faculty",facultyRouter);
app.use("/api/course",courseRouter);
app.use("/api/assignment",assignmentRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});