const Traveler = require("../models/travelerModel")

const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.signInWithEmailAndPassword = async (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }

    try {
        const traveler = await Traveler.findOne({ email: email }).exec();

        if (traveler == null) {
            res.status(400).json({ msg: "Error: user not found" });
        }

        if (!traveler.authenticate(password)) {
            return res.status(400).json({
                err: "Error: NOT Authorized wrong password",
            });
        }

        const token = jwt.sign({ _id: traveler._id }, process.env.SECRET, {
            expiresIn: "24h",
        });

        res.cookie("token", token, { expire: new Date() + 99 });
        return res.status(200).json({
            idToken: token,
            userId: traveler._id,
            refreshToken: token,
            expiresIn: "86400",
        });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong" });
    }
};

exports.signUp = async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg,
        });
    }
    try {
        const existing = await Traveler.findOne({ email });
        if (existing) {
            return res.status(400).json({
                err: "email already in use",
            });
        }

        const traveler = new Traveler(req.body);
        traveler.save((err, user) => {
            if (err) {
                return res.status(400).json({
                    err: "NOT able to save traveler in DB",
                });
            }
            res.json({
                name: user.name,
                email: user.email,
                id: user._id,
            });
        });
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong" });
    }
};