const express = require("express");
const router = express.Router();
const ExamPaper = require("../models/exampaper");
const Book = require('../models/book');
const Discussion = require('../models/discussion');

router.get("/exam/:courseCode", async (req, res)=>{
    try {
        const {courseCode} = req.params;
        const examPapers = await ExamPaper.find({courseCode: courseCode});
        res.status(200).json(examPapers);
    } catch (error) {
        console.error("Server Error : ",error);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

router.post("/exam/add/:courseCode", async (req, res)=>{
    try {
        const {courseCode} = req.params;
        const examPaperData = req.body;
        const examPaper = new ExamPaper({...examPaperData, courseCode: courseCode});
        await examPaper.save();

        res.status(201).json(examPaper);
        
    } catch (error) {
        console.error("Server Error: ", error);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

router.get("/book/:courseCode", async (req, res)=>{
    try {
        const {courseCode} = req.params;
        const books = await Book.find({courseCode: courseCode});
        res.status(200).json(books);
    } catch (error) {
        console.error("Server Error : ",error);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

router.post("/book/add/:courseCode", async (req, res)=>{
    try {
        const {courseCode} = req.params;
        const boookData = req.body;
        const book = new Book({...boookData, courseCode: courseCode});
        await book.save();
        res.status(201).json(book);
        
    } catch (error) {
        console.error("Server Error: ", error);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

router.get("/discussion/:courseCode", async (req, res)=>{
    try {
        const {courseCode} = req.params;
        const discussions = await Discussion.find({courseCode: courseCode});
        res.status(200).json(discussions);
    } catch (error) {
        console.error("Server Error : ",error);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

router.post("/discussion/add/:courseCode", async (req, res)=>{
    try {
        const {courseCode} = req.params;
        const discussionData = req.body;
        const discussion = new Discussion({...discussionData, courseCode: courseCode});
        await discussion.save();
        res.status(201).json(discussion);
        
    } catch (error) {
        console.error("Server Error: ", error);
        res.status(500).json({message: "Server Error Occured!"});
    }
});

module.exports = router;