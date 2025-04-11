const mongoose = require("mongoose");

const SemesterSchema = new mongoose.Schema({
    semesterNumber: {type: Number, required: true},
    discipline: {type: mongoose.Schema.Types.ObjectId, ref: "discipline"},
    program: {type: mongoose.Schema.Types.ObjectId, ref: "program"}
});

module.exports = mongoose.model("semester", SemesterSchema);
