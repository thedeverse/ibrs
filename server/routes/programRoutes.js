const express = require("express");
const router = express.Router();
const Program = require("../models/program");

router.get("/fetch", async(req, res)=>{
    try{
        const programs = await Program.find();
        res.json(programs);
    }catch(error){
        res.status(500).json({message: "Server Error", error});
    }
})

router.post("/", async(req, res)=>{
    try{
        const {name, description, imageUrl, semCount} = req.body;
        const newProgram = new Program({name, description, imageUrl, semCount});
        await newProgram.save();
        res.status(200).json(newProgram);
    }catch (error){
        res.status(500).json({error: "Failed to add Program"});
    }
});


module.exports = router;