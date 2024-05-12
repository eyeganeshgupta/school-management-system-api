const Admin = require("../model/Staff/Admin");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (request, response, next) => {
  // TODO: get token from header
  const headerObj = request.headers;
  const token = headerObj?.authorization?.split(" ")[1];

  // TODO: verify token
  const verifiedToken = verifyToken(token);
  if (verifiedToken) {
    // ! find the admin
    const user = await Admin.findById(verifiedToken.id).select(
      "name email role"
    );

    // TODO: save the user into request object
    request.userAuth = user;
    next();
  } else {
    const error = new Error("Token expired / invalid");
    next(error);
  }
};

module.exports = isLogin;
