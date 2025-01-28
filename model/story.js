const mongoose = require("mongoose")
let Schema = mongoose.Schema
const story = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 60 * 24
    }
})

const STORY = mongoose.model("Story", story)

module.exports = STORY