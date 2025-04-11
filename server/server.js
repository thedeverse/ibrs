const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // allows frontend (React) to make API requests to the backend
require("dotenv").config();
const programRoutes = require("./routes/programRoutes");
const disciplineRoutes = require("./routes/disciplineRoutes");
const semesterRoutes = require("./routes/semesterRoutes");
const courseRoutes = require("./routes/courseRoutes");
const subCourseRoutes = require("./routes/subCourseRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "*",
    credentials: false, // Allows cookies and authorization headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed request methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));

app.use(express.json());
app.use("/api/programs", programRoutes);
app.use("/api/discipline", disciplineRoutes);
app.use("/api/semester", semesterRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/subCourse", subCourseRoutes);


app.listen(PORT, ()=>{
    console.log("Server is runnign blazingly fast on http://localhost:5000 !!");
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err => console.error(err));