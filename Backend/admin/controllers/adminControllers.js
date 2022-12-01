const Place = require("../models/placeModel")
const Hotel = require("../models/hotelModel")
const Traveler = require("../../travelers/models/travelerModel")

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

exports.createHotel = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            err: errors.array()[0].msg,
        });
    }

    try {
        const hotel = new Hotel(req.body);
        hotel.save((err, savedHotel) => {
            if (err) {
                return res.status(400).json({
                    err: "NOT able to save hotel in DB",
                });
            }
            return res.status(200).json({
                id: savedHotel._id
            })
        })
    } catch (error) {
        res.status(400).json({ err: "Something went wrong" });
    }
}

exports.getAllHotels = async (req, res, next) => {
    try {
        const search = req.param('search');
        var regex = new RegExp(search);
        let hotels = [];
        if (search === 'undefined' || search === '') {
            hotels = await Hotel.find({});
        }
        else {
            hotels = await Hotel.find({ name: regex });
        }
        if (hotels.length > 0) {
            return res.status(200).json(hotels);
        }
        else {
            return res.status(200).json(hotels);
        }
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
exports.deletePlace = async (req, res, next) => {
    try {
        const id = req.param('id');
        let places;
        if (id === 'undefined' || id === '') {
            return res.status(400).json({ err: "Something went wrong" });
        }
        else {
            places = await Place.deleteOne({ _id: id });
        }
        if (places) {
            return res.status(200).json({ msg: "deleted" });
        }
        else {
            res.status(400).json({ err: "Something went wrong" });
        }
    } catch (error) {
        res.status(400).json({ err: "Something went wrong" });
    }
}
exports.deleteHotel = async (req, res, next) => {
    try {
        const id = req.param('id');
        let hotels;
        if (id === 'undefined' || id === '') {
            return res.status(400).json({ err: "Something went wrong" });
        }
        else {
            hotels = await Hotel.deleteOne({ _id: id });
        }
        if (hotels) {
            return res.status(200).json({ msg: "deleted" });
        }
        else {
            res.status(400).json({ err: "Something went wrong" });
        }
    } catch (error) {
        res.status(400).json({ err: "Something went wrong" });
    }
}

exports.getTotal = async (req, res, next) => {
    try {
        const places = await Place.find({});
        const hotels = await Hotel.find({});
        const travelers = await Traveler.find({});
        return res.status(200).json({
            totalPlaces: places.length,
            totalHotels: hotels.length,
            totalTravelers: travelers.length
        })
    } catch (error) {
        res.status(400).json({ err: "Something went wrong" });
    }
}