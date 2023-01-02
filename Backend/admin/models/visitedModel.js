const mongoose = require("mongoose");
const { Schema } = mongoose;

const visitedSchema = new Schema({
    id: String,
    placeId: String,
    visitedById: String,
});

module.exports = mongoose.model("Visited", visitedSchema);