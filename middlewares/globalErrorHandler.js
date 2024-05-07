const globalErrorHandler = (error, request, response, next) => {
  // stack
  const stack = error.stack;
  // message
  const message = error.message;
  // status
  const status = error.status ? error.status : "failed";
  const statusCode = error.statusCode ? error.statusCode : 500;

  response.status(statusCode).json({
    message,
    status,
    stack,
  });
};

// ! not found
const notFoundError = (request, response, next) => {
  const error = new Error(`Can't find ${request.originalUrl} on the server`);
  next(error);
};

module.exports = {
  globalErrorHandler,
  notFoundError,
};
