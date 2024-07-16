const verifyToken = require("../helpers/authHelpers")

const Authenticate = async (req, res, next) => {
    try {

      const authHeader = req.headers["authorization"];
      const authToken = _checkThatValidTokenFormatIsProvided(authHeader);
      const payload = await verifyToken(authToken);

      
  
      req.user = {...payload, token: authToken};
      next();
    } catch (error) {
      next(error);
    }
  };
  
  const _checkThatValidTokenFormatIsProvided = (authToken) => {
    let splitToken;
  
    if (
      !authToken ||
      (splitToken = authToken.split(" ")).length !== 2 ||
      splitToken[0].toLowerCase() !== "bearer" ||
      !splitToken[1]
    ) {
      throw new Error("Invalid token!");
    }
  
    return splitToken[1];
  };
  
  module.exports = Authenticate;