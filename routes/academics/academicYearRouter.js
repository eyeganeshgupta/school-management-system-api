const express = require("express");
const {
  createAcademicYearCtrl,
} = require("../../controller/academics/academicYearCtrl");
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYearCtrl);

module.exports = academicYearRouter;
