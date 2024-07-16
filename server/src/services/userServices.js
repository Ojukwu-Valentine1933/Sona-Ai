const User = require("../model/userModel")

const findUserByEmail = async (email) => {
const user = await User.findOne({email});
return user;
}

const createNewUser = async(userData) => {
    const user = await User.create(userData)

    return user
}
module.exports = {findUserByEmail, createNewUser};