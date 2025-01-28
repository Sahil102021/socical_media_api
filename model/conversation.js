const mongoose = require('mongoose');
let Schema = mongoose.Schema

const conversation = new Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }]
}, { timestamps: true })

let CONVERSTION = mongoose.model("Conversation", conversation)

module.exports = CONVERSTION