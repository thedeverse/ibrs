const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description : {type: String},
    imageUrl: {type:String},
    semCount: {type:Number},
});

module.exports = mongoose.model("program", ProgramSchema);
