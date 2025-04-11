const express = require("express");
const router = express.Router();
const Discipline = require('../models/discipline');
const Program  = require("../models/program");

router.get("/fetch/:programId", async(req,res)=>{
    try{
        const {programId} = req.params;

        const disciplines = await Discipline.find({program: programId});

        res.status(200).json(disciplines);
    }catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

router.post("/:programId", async (req, res)=>{
    try{
        const {programId} = req.params;
        const disciplineData = req.body;

        const program = await Program.findById(programId);
        if(!program){
            return res.status(404).json({message: "Program not Found"});
        }

        const newDiscipline = new Discipline({...disciplineData, program: programId});
        await newDiscipline.save();

        res.status(201).json(newDiscipline);
    }catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error Occured!"});
    }
})

module.exports = router;