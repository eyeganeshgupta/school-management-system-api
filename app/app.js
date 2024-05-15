const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");
const {
  notFoundError,
  globalErrorHandler,
} = require("../middlewares/globalErrorHandler");
const academicYearRouter = require("../routes/academics/academicYearRouter");

const app = express();

// ! middlewares
app.use(morgan("dev"));
// * 👇 pass incoming json data
app.use(express.json());

// ! routes
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);

// ! error middleware
app.use(notFoundError);
app.use(globalErrorHandler);

module.exports = app;
