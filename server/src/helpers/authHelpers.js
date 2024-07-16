 const { OAuth2Client } = require("google-auth-library");
const {CLIENT_ID, CLIENT_SECRET} = require("../config/dotEnv")
const client = new OAuth2Client(CLIENT_SECRET);



const verifyToken = async (token) => {

 const ticket = await client.verifyIdToken({
 idToken: token,
   audience: CLIENT_ID, });

 const { given_name, family_name, email, picture, exp } = ticket.getPayload();

 return { given_name, family_name, email, picture, exp };
};

 module.exports = verifyToken;