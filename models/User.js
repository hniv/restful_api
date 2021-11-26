const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const UserSchema = mongoose.Schema({
    _id: {
        type: "object",
        value: { type: "Buffer" },
        default: uuidv4(),
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("User", UserSchema)