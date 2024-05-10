const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "ey3", { expiresIn: "90d" });
};

module.exports = generateToken;
