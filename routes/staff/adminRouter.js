const express = require("express");

const adminRouter = express.Router();

// * admin register
adminRouter.post("/register", (request, response) => {
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
adminRouter.post("/login", (request, response) => {
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
adminRouter.get("/", (request, response) => {
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
adminRouter.get("/:id", (request, response) => {
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
adminRouter.put("/:id", (request, response) => {
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
adminRouter.delete("/:id", (request, response) => {
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
adminRouter.put("/suspend/teacher/:id", (request, response) => {
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
adminRouter.put("/unsuspend/teacher/:id", (request, response) => {
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
adminRouter.put("/withdraw/teacher/:id", (request, response) => {
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
adminRouter.put("/unwithdraw/teacher/:id", (request, response) => {
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
adminRouter.put("/publish/exam/:id", (request, response) => {
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
adminRouter.put("/unpublish/exam/:id", (request, response) => {
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

module.exports = adminRouter;
