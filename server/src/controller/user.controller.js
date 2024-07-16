const { findUserByEmail, createNewUser } = require("../services/userServices");

const googleAuth = async (req, res) => {
 try{
  const { email, picture, given_name, family_name, token } = req.user;

  const user = await findUserByEmail(email);
  if (!user) {
    const newUser = await createNewUser({
      firstName: given_name,
      lastName: family_name,
      profilePicture: picture,
       email,
    });

    if(!newUser){
      return res.status(400).json({ error:"login failed" })
    }
    return res.status(200).json({ message: "success", newUser, token });
  }
    return res.status(201).json({ message: "success", user, token });
 
 }catch(error){
  return res.status(500).json({ error:"something went wrong" })
 }
}


const getCurrentUser = async (req, res) => {
  try {

    const { email } = req.user;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { googleAuth, getCurrentUser };
