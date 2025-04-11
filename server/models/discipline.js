const mongoose = require("mongoose");

const DisciplineSchema = new mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String},
    program: {type: mongoose.Schema.Types.ObjectId, ref: "program"}
});

module.exports = mongoose.model("discipline", DisciplineSchema);
