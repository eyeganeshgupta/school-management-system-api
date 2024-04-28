const express = require("express");
const morgan = require("morgan");

const app = express();

// ! middlewares
app.use(morgan("dev"));

// ! routes
// * admin register
app.post("/api/v1/admins/register", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Admin has been registered!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin login
app.post("/api/v1/admins/login", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Admin has been logged in!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin - getAllAdmin
app.get("/api/v1/admins", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "All admins!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin - getSingleAdmin
app.get("/api/v1/admins/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Single Admin!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * update admin
app.put("/api/v1/admins/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Update admin!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * delete admin
app.delete("/api/v1/admins/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Delete admin!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin suspending teacher
app.put("/api/v1/admins/suspend/teacher/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Admin suspend teacher!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin un-suspending teacher
app.put("/api/v1/admins/unsuspend/teacher/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Admin unsuspend teacher!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin withdrawing teacher
app.put("/api/v1/admins/withdraw/teacher/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Admin withdraw teacher!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin unwithdrawing teacher
app.put("/api/v1/admins/unwithdraw/teacher/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Admin unwithdraw teacher!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin publishing examination result
app.put("/api/v1/admins/publish/exam/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Admin publishing result!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

// * admin unpublishing examination result
app.put("/api/v1/admins/unpublish/exam/:id", (request, response) => {
  try {
    response.status(201).json({
      status: "success",
      data: "Admin unpublishing result!",
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
});

module.exports = app;
