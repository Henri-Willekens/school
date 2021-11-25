const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let noteModel = new Schema(
    {
        title: {type: String},
        body:  {type: String},
        author: {type: String}
    }
)

module.exports = mongoose.model('note', noteModel);