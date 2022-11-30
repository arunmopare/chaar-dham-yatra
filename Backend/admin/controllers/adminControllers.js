const Place = require("../models/placeModel")
const { check, validationResult } = require("express-validator");

exports.createPlace = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            err: errors.array()[0].msg,
        });
    }

    try {
        const place = new Place(req.body);
        place.save((err, savedPlace) => {
            if (err) {
                return res.status(400).json({
                    err: "NOT able to save place in DB",
                });
            }
            return res.status(200).json({
                id: savedPlace._id
            })
        })
    } catch (error) {
        res.status(400).json({ err: "Something went wrong" });
    }
}

exports.getAllPlaces = async (req, res, next) => {
    try {
        const places = await Place.find({});
        console.log('====================================');
        console.log(places);
        console.log('====================================');
        if (places.length > 0) {
            return res.status(200).json(places);
        }
        else {
            return res.status(200).json();
        }
    } catch (error) {
        res.status(400).json({ err: "Something went wrong" });
    }
}