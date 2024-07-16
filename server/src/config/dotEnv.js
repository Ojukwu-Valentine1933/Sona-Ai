const dotenv = require("dotenv")
dotenv.config()


module.exports = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    RAPID_API_KEY: process.env.RAPID_API_KEY,
    RAPID_API_HOST: process.env.RAPID_API_HOST,
    FILTER_URL: process.env.FILTER_URL
}
