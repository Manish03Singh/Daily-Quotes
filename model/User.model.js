const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    quotation: String,
    author: String,
    image: String,
    imageSize: {
        height: Number,
        width: Number
    }
})

const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true },
    likes: [likeSchema]
})

module.exports = mongoose.model("User", userSchema)