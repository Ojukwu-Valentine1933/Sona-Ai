const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./route/authRoute");
const AudioRoute = require("./route/AudioRouting");
const NewChatRoute = require("./route/NewChatRouter"); // Import the router directly
const Authenticate = require("../src/middlewares/Authenticate")

const allowedOrigins = ['http://localhost:3000', 'https://sona-ai.vercel.app'];

app.use(cors({
  origin: function(origin, callback){
    // Allow requests with no origin, like mobile apps or curl requests
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Use built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/audio", AudioRoute);
app.use("/chat", NewChatRoute); // Use the NewChatRouter for chat-related routes

app.get("/", (req, res) => {
  res.json({ message: "Server is running fine" });
});

module.exports = app;

