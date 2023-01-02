const mongoose = require("mongoose");
const { Schema } = mongoose;

const hotelBooking = new Schema({
    id: String,
    userName: String,
    userId: String,
    hotelId: String,
    numberOfRooms: Number,
    fromDate: String,
    toDate: String,
    hotelName: String,
    isConfirmed: {
        default: false,
        type: Boolean,
    }
});

module.exports = mongoose.model("Booking", hotelBooking);