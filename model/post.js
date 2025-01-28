const mongoose = require("mongoose")
let Schema = mongoose.Schema

const post = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    caption: {
        type: String,
        trim: true
    },
    image: [{
        type: String,
        required: true
    }],
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

let POST = mongoose.model("Post", post)

module.exports = POST