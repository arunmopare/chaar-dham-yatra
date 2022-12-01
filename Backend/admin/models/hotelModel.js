const mongoose = require("mongoose");
const { Schema } = mongoose;

const hotelSchema = new Schema({
    id: String,
    name: String,
    totalRooms: String,
    roomsAvailable: String,
    imageUrl: String,
    location: String,
});

module.exports = mongoose.model("Hotel", hotelSchema);