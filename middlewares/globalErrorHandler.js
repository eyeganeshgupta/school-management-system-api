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

module.exports = globalErrorHandler;
