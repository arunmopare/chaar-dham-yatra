require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const host = '0.0.0.0'
const port = 3000

var jsonParser = bodyParser.json()
app.use(jsonParser);

const cookieParser = require("cookie-parser");
var cors = require('cors')
app.use(cors({
    origin: '*'
}));
app.use(cookieParser())
app.use(cors());

connectToMongo().then(() => console.log("Connected to MongoDB")).catch(err => console.log(err))

async function connectToMongo() {
    await mongoose.connect('mongodb://localhost:27017/char-dham');
}

app.get('/', (req, res) => {
    res.status(200).json({ message: "hello there" })
})

const travelersRoutes = require("./travelers/routes/travelerRoutes");
const adminRoutes = require("./admin/routes/adminRoutes")
// //Routes
// // Traveler
app.use("/api", travelersRoutes)
// // Admin
app.use("/api", adminRoutes)


app.listen(port, host, () => {
    console.log("Started app on port ", port)
})