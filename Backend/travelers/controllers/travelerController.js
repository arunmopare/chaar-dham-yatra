const Traveler = require("../models/travelerModel")

const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.signInWithEmailAndPassword = async (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if (!errors.isEmpty()) {
        return res.status(422).json({
            err: errors.array()[0].msg,
        });
    }

    try {
        const traveler = await Traveler.findOne({ email: email }).exec();

        if (traveler == null) {
            return res.status(400).json({ err: "User not found" });
        }

        if (!traveler.authenticate(password)) {
            return res.status(400).json({
                err: "Invalid email or password",
            });
        }

        const token = jwt.sign({ _id: traveler._id }, process.env.SECRET || 'dont tell', {
            expiresIn: "24h",
        });

        res.cookie("token", token, { expire: new Date() + 99 })

        return res.status(200).json({
            userId: traveler._id,
            email: traveler.email,
            firstName: traveler.firstName,
            lastName: traveler.lastName,
            auth: {
                idToken: token,
                refreshToken: token,
                expiresIn: "86400",
                role: traveler.role
            },

        });
    } catch (error) {
        return res.status(400).json({ err: "Something went wrong" });
    }
};

exports.signUp = async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            err: errors.array()[0].msg,
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
            const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
                expiresIn: "24h",
            });
            return res.status(200).json({
                userId: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                auth: {
                    idToken: token,
                    refreshToken: token,
                    expiresIn: "86400",
                    role: user.role
                },
            });
        });
    } catch (error) {
        res.status(400).json({ err: "Something went wrong" });
    }
};

exports.isAuthenticated = async (req, res, next) => {
    if (!req.headers.authorization) {
        console.log("1", req.headers.authorization);
        return res.status(401).json({
            err: "Unauthorized Request",
        });
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token == "null") {
        console.log("2", req.headers.authorization);
        return res.status(401).json({
            error: "Unauthorized Request",
        });
    }
    try {
        let payload = jwt.verify(token, process.env.SECRET);
        if (!payload) {
            return res.status(401).json({
                error: "Unauthorized Request 3",
            });
        }
        req.userPayloadId = payload._id;
        next();
    } catch (error) {
        console.log("3", req.headers.authorization);
        logger("error", error);
        return res.status(400).json({ msg: "Errors: Something went wrong." });
    }
};
