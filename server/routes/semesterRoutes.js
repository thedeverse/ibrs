const express = require("express");
const router = express.Router();
const Course = require("../models/course");


router.get("/:semId/fetch/:programId/:disciplineId", async (req, res)=>{
    try{
        const {semId, programId, disciplineId} = req.params;
        const courses = await Course.find({program: programId, discipline: disciplineId, semester:semId});
        res.status(200).json(courses);

    }catch (e){
        console.error(e);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

router.post("/:semId/:programId/:disciplineId", async (req, res)=>{
    try{
        const {semId, programId, disciplineId} = req.params;
        const courseData = req.body;
        
        const newCourse = new Course({...courseData, semester: semId, program: programId, discipline: disciplineId});
        await newCourse.save();
        
        res.status(201).json(newCourse);
    }catch (e){
        console.error(e);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

module.exports = router;