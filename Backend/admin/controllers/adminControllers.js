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
        return res.status(400).json({ err: "Something went wrong" });
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
        return res.status(400).json({ err: "Something went wrong" });
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
        return res.status(400).json({ err: "Something went wrong" });
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
        return res.status(400).json({ err: "Something went wrong" });
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
        return res.status(400).json({ err: "Something went wrong" });
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
        return res.status(400).json({ err: "Something went wrong" });
    }
}

exports.getHotel = async (req, res, next) => {
    try {
        const id = req.param('id');
        let hotel;
        if (id === 'undefined' || id === '') {
            return res.status(400).json({ err: "Something went wrong" });
        }
        else {
            hotel = await Hotel.findOne({ _id: id });
        }
        if (hotel) {
            return res.status(200).json(hotel);
        }
        else {
            res.status(400).json({ err: "Something went wrong" });
        }
    } catch (error) {
        return res.status(400).json({ err: "Something went wrong" });
    }
}

exports.getPlace = async (req, res, next) => {
    try {
        const id = req.param('id');
        let place;
        if (id === 'undefined' || id === '') {
            return res.status(400).json({ err: "Something went wrong" });
        }
        else {
            place = await Place.findOne({ _id: id });
        }
        if (place) {
            return res.status(200).json(place);
        }
        else {
            res.status(400).json({ err: "Something went wrong" });
        }
    } catch (error) {
        return res.status(400).json({ err: "Something went wrong" });
    }
}
exports.updateHotel = async (req, res, next) => {
    try {
        const newHotel = new Hotel(req.body);
        const id = req.param('id');
        let oldHotel;
        if (id === 'undefined' || id === '') {
            return res.status(400).json({ err: "Something went wrong" });
        }
        else {
            oldHotel = await Hotel.findOne({ _id: id });
        }
        if (oldHotel) {
            oldHotel.name = newHotel.name;
            oldHotel.imageUrl = newHotel.imageUrl;
            oldHotel.totalRooms = newHotel.totalRooms;
            oldHotel.location = newHotel.location;

            await oldHotel.save();
            return res.status(200).json(oldHotel);
        }
        else {
            res.status(400).json({ err: "Something went wrong" });
        }
    } catch (error) {
        return res.status(400).json({ err: "Something went wrong" });
    }
}
exports.updatePlace = async (req, res, next) => {
    try {
        const newPlace = new Hotel(req.body);
        const id = req.param('id');
        let oldPlace;
        if (id === 'undefined' || id === '') {
            return res.status(400).json({ err: "Something went wrong" });
        }
        else {
            oldPlace = await Place.findOne({ _id: id });
        }
        if (oldPlace) {
            oldPlace.category = newPlace.category;
            oldPlace.name = newPlace.name;
            oldPlace.imageUrl = newPlace.imageUrl;
            oldPlace.description = newPlace.description;
            oldPlace.location = newPlace.location;
            oldPlace.isCharDham = newPlace.isCharDham;

            await oldPlace.save();
            return res.status(200).json(oldPlace);
        }
        else {
            res.status(400).json({ err: "Something went wrong" });
        }
    } catch (error) {
        return res.status(400).json({ err: "Something went wrong" });
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
        return res.status(400).json({ err: "Something went wrong" });
    }
}
