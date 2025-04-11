const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    courseCode: {type: String, required: true},
    title: {type: String, required: true},
    fileUrl: {type: String, required: true},
});

module.exports = mongoose.model("book", BookSchema);