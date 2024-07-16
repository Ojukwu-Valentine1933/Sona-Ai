const express = require("express")
const app = express()
const cors = require("cors");
const authRoute = require("./route/authRoute");
const AudioRoute = require("./route/AudioRouting");



const corsOption = {
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
};


app.use(cors(corsOption));

// Use built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute)
app.use("/audio", AudioRoute);


app.get("/", (req, res) => {
    res.json({ message: "Server is running fine" });
})


module.exports = app

