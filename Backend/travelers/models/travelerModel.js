const mongoose = require("mongoose");
const { Schema } = mongoose;
const crypto = require("crypto");
const uuid = require('uuid');

const travelerSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String, // String is shorthand for {type: String}
    email: String,
    salt: String,
    encrypted_password: {
        type: String,
    },
});

travelerSchema
    .virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuid.v1();
        this.encrypted_password = this.securePassword(password);
    })
    .get(function () {
        return this._password;
    });

travelerSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encrypted_password;
    },
    securePassword: function (plainpassword) {
        if (!plainpassword) return "";
        try {
            return crypto
                .createHmac("sha256", this.salt)
                .update(plainpassword)
                .digest("hex");
        } catch (err) {
            return "";
        }
    },
};
module.exports = mongoose.model("Traveler", travelerSchema);