const isLogin = (request, response, next) => {
  const isLogin = request.userAuth;
  if (isLogin) {
    next();
  } else {
    const error = new Error("You haven't logged in yet.");
    next(error);
  }
};

module.exports = isLogin;
