const mongoose = require("mongoose")
let Schema = mongoose.Schema

const like = new Schema({
    user: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        required: true
    },
    like: {
        type: Number,
        required: true
    }
});

let LIKE = mongoose.model("like", like)
module.exports = LIKE