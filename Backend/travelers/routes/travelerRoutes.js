var express = require('express');
var router = express.Router()
const { check, validationResult } = require('express-validator');
const { signUp, signInWithEmailAndPassword } = require('../controllers/travelerController');

router.post("/traveler/signup", [
    check("firstName", "name should be at-least 3 charecter").isLength({ min: 3 }),
    check("lastName", "name should be at-least 3 charecter").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password must be at-lest 6 char").isLength({ min: 6 })
], signUp);


router.post("/traveler/signin", [
    check("email", "email is required").isEmail(),
    check("password", "password must be at-lest 6 char").isLength({ min: 6 })
], signInWithEmailAndPassword);


// router.get("/signout", SignOut);

// router.get("/testRoute", isSignedin, (req, res) => {
//     res.json(req.auth)
// });
module.exports = router;