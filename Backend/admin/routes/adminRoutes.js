const { check, validationResult } = require('express-validator');
const { createPlace, getAllPlaces, createHotel, getAllHotels, getTotal, deletePlace, deleteHotel, getHotel, updateHotel, getPlace, updatePlace, addVisitedPlace, addBooking, getBooking } = require('../controllers/adminControllers');
var express = require('express');
var router = express.Router()

// Places
router.post("/admin/place", [
    check("category", "category should be at-least 3 character").isLength({ min: 3 }),
    check("name", "name should be at-least 3 character").isLength({ min: 3 }),
    check("description", "description should be at-least 3 character").isLength({ min: 3 }),
    check("imageUrl", "invalid imageUrl").isURL(),
    check("location", "invalid locationUrl").isURL(),
], createPlace);
router.get("/admin/places/:search", getAllPlaces);
router.delete("/admin/place/:id", deletePlace);
router.get("/admin/place/:id", getPlace)
router.patch("/admin/place/:id", updatePlace)


// Hotels
router.post("/admin/hotel", [
    check("name", "category should be at-least 3 character").isLength({ min: 3 }),
    check("imageUrl", "invalid imageUrl").isURL(),
    check("location", "location should be at-least 3 character").isLength({ min: 3 }),
], createHotel);
router.get("/admin/hotels/:search", getAllHotels);
router.get("/admin/hotel/:id", getHotel)
router.patch("/admin/hotel/:id", updateHotel)
router.delete("/admin/hotel/:id", deleteHotel);

// Stats
router.get("/admin/total", getTotal);

// visited
router.post("/place/visited", addVisitedPlace);

// booking
router.post("/admin/booking", addBooking);
router.get("/admin/booking/:id", getBooking)

module.exports = router;