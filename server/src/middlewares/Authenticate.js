const verifyToken = require("../helpers/authHelpers");

const _checkThatValidTokenFormatIsProvided = (authToken) => {
  if (!authToken || !authToken.startsWith("Bearer ")) {
    throw new Error("Invalid token format!");
  }

  return authToken.split(" ")[1];
};

const Authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      throw new Error("Authorization header missing");
    }

    const authToken = _checkThatValidTokenFormatIsProvided(authHeader);
    const payload = await verifyToken(authToken);

    req.user = { ...payload, token: authToken };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = Authenticate;
