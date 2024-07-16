const express = require ("express")
const router = express.Router()
const Authenticate = require("../middlewares/Authenticate")


const {googleAuth, getCurrentUser} = require("../controller/user.controller")

router.post("/login", Authenticate, googleAuth)
router.get("/user", Authenticate, getCurrentUser);


module.exports = router