const { check, validationResult } = require('express-validator');
const { createPlace, getAllPlaces, createHotel, getAllHotels, getTotal, deletePlace, deleteHotel } = require('../controllers/adminControllers');
var express = require('express');
var router = express.Router()

router.post("/admin/place", [
    check("category", "category should be at-least 3 character").isLength({ min: 3 }),
    check("name", "name should be at-least 3 character").isLength({ min: 3 }),
    check("description", "description should be at-least 3 character").isLength({ min: 3 }),
    check("imageUrl", "invalid imageUrl").isURL(),
    check("location", "invalid locationUrl").isURL(),
], createPlace);

router.post("/admin/hotel", [
    check("name", "category should be at-least 3 character").isLength({ min: 3 }),
    check("imageUrl", "invalid imageUrl").isURL(),
    check("location", "location should be at-least 3 character").isLength({ min: 3 }),
], createHotel);
router.get("/admin/places/:search", getAllPlaces);
router.delete("/admin/place/:id", deletePlace);


router.get("/admin/places/:search", getAllPlaces);
router.delete("/admin/hotel/:id", deleteHotel);

router.get("/admin/total", getTotal);



module.exports = router;
// id: String,
//     category: String,
//     name: String,
//     imageUrl: String,
//     description: String,
//     location: String,
//     isCharDham: Boolean