const { check, validationResult } = require('express-validator');
const { createPlace, getAllPlaces } = require('../controllers/adminControllers');
var express = require('express');
var router = express.Router()

router.post("/admin/place", [
    check("category", "category should be at-least 3 character").isLength({ min: 3 }),
    check("name", "name should be at-least 3 character").isLength({ min: 3 }),
    check("description", "description should be at-least 3 character").isLength({ min: 3 }),
    check("imageUrl", "invalid imageUrl").isURL(),
    check("location", "invalid locationUrl").isURL(),
], createPlace);

router.get("/admin/places", getAllPlaces);


module.exports = router;
// id: String,
//     category: String,
//     name: String,
//     imageUrl: String,
//     description: String,
//     location: String,
//     isCharDham: Boolean