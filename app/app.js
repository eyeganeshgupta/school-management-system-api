const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");
const globalErrorHandler = require("../middlewares/globalErrorHandler");

const app = express();

// ! middlewares
app.use(morgan("dev"));
// * 👇 pass incoming json data
app.use(express.json());

// ! routes
app.use("/api/v1/admins", adminRouter);

// ! error middleware
app.use(globalErrorHandler);

module.exports = app;
