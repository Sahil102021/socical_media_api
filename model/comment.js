const mongoose = require('mongoose');
let Schema = mongoose.Schema

const comment = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    },
    replies:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        text:{
            type:String,
            required:true,
            trim:true
        },
        likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }],
        createdAt:{
            type:Date,
            default:Date.now
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

let COMMENT = mongoose.model("Comment", comment)
module.exports = COMMENT