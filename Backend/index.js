require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

const port = 3000

var jsonParser = bodyParser.json()
app.use(jsonParser);

const cookieParser = require("cookie-parser");
var cors = require('cors')

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
// //Routes
// // Traveler
app.use("/api", travelersRoutes)


app.listen(port, () => {
    console.log("Started app on port ", port)
})