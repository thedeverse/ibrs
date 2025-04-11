const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    code: {type: String, required: true},
    title: {type: String, required: true},
    semester: {type: Number, required: true},
    program: {type: mongoose.Schema.Types.ObjectId, ref:"program"},
    discipline: {type: mongoose.Schema.Types.ObjectId, ref:"discipline"},
    exampapers: [{type: mongoose.Schema.Types.ObjectId, ref:"exampaper"}],
    books: [{type: mongoose.Schema.Types.ObjectId, ref:"book"}],
    dicussions: [{type: mongoose.Schema.Types.ObjectId, ref:"discussion"}]
});

module.exports = mongoose.model("course", CourseSchema);
