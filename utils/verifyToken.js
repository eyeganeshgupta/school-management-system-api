const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, "ey3", (error, decoded) => {
    if (error) {
      return false;
    } else {
      return decoded;
    }
  });
};

module.exports = verifyToken;
