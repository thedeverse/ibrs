const mongoose = require("mongoose");

const DiscussionSchema = new mongoose.Schema({
    courseCode: {type: String, required:true},
    time: {type: String, required: true},
    data: {type: String, required: true}
});

module.exports = mongoose.model("discussion", DiscussionSchema);