var express = require('express');
var router = express.Router()
const { check, validationResult } = require('express-validator');
const { register, signIn } = require('../controllers/travelerController');

router.post("/signup", [
    check("name", "name should be at-least 3 charecter").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password must be at-lest 6 char").isLength({ min: 6 })
], register);


router.post("/signin", [
    check("email", "email is required").isEmail(),
    check("password", "password must be at-lest 6 char").isLength({ min: 6 })
], signIn);


// router.get("/signout", SignOut);

// router.get("/testRoute", isSignedin, (req, res) => {
//     res.json(req.auth)
// });
module.exports = router;