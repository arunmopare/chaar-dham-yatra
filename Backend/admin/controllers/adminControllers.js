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
        const search = req.param('search');
        var regex = new RegExp(search);
        let places = [];
        if (search === 'undefined' || search === '') {
            places = await Place.find({});
        }
        else {
            places = await Place.find({ name: regex });
        }
        if (places.length > 0) {
            return res.status(200).json(places);
        }
        else {
            return res.status(200).json(places);
        }
    } catch (error) {
        res.status(400).json({ err: "Something went wrong" });
    }
}