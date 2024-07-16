const mongoose = require("mongoose");
const {DB_URI} = require("./config/dotEnv")


const mongooseConnection = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = mongooseConnection;
