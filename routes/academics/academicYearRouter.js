const express = require("express");
const {
  createAcademicYearCtrl,
  getAcademicYears,
  getAcademicYear,
} = require("../../controller/academics/academicYearCtrl");
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYearCtrl);
academicYearRouter.get("/", isLogin, isAdmin, getAcademicYears);
academicYearRouter.get("/:id", isLogin, isAdmin, getAcademicYear);

module.exports = academicYearRouter;
