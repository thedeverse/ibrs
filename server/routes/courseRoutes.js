const express = require("express");
const router = express.Router();
const Course = require("../models/course");

router.get("/:courseId", async (req, res)=>{
    try{
        const { courseId } = req.params;
        const course = await Course.findById(courseId);
        res.status(200).json(course);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error Occured!"});
    }
});



module.exports = router;