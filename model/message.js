const mongoose = require("mongoose")
let Schema = mongoose.Schema

const message = new Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

const MESSAGE = mongoose.model("Message", message)

module.exports = MESSAGE

