const mongoose = require("mongoose");

const ExamPaperSchema = new mongoose.Schema({
    courseCode: {type: String, required: true},
    title: {type: String, required: true},
    imageUrl: String,
    examType: {
        type: String,
        enum: ["mid", "end", "quiz"],
        required: true
    },
});

module.exports = mongoose.model("exampaper", ExamPaperSchema);