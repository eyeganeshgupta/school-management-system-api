const AsyncHandler = require("express-async-handler");
const Admin = require("../model/Staff/Admin");

const isAdmin = AsyncHandler(async (request, response, next) => {
  // TODO: find the user
  const userId = request?.userAuth?._id;
  const adminFound = await Admin.findById(userId);

  // TODO: check if admin
  if (adminFound?.role === "admin") {
    next();
  } else {
    next(new Error("Entry prohibited, Admin credentials needed."));
  }
});

module.exports = isAdmin;
