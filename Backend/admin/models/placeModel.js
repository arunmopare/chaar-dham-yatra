const mongoose = require("mongoose");
const { Schema } = mongoose;

const placeSchema = new Schema({
    id: String,
    category: String,
    name: String,
    imageUrl: String,
    description: String,
    location: String,
    isCharDham: Boolean
});

module.exports = mongoose.model("Place", placeSchema);