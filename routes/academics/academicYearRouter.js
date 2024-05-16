const express = require("express");
const {
  createAcademicYearCtrl,
  getAcademicYearsCtrl,
  getAcademicYearCtrl,
  updateAcademicYearCtrl,
  deleteAcademicYearCtrl,
} = require("../../controller/academics/academicYearCtrl");
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLogin, isAdmin, createAcademicYearCtrl);
academicYearRouter.get("/", isLogin, isAdmin, getAcademicYearsCtrl);
academicYearRouter.get("/:id", isLogin, isAdmin, getAcademicYearCtrl);
academicYearRouter.put("/:id", isLogin, isAdmin, updateAcademicYearCtrl);
academicYearRouter.delete("/:id", isLogin, isAdmin, deleteAcademicYearCtrl);

module.exports = academicYearRouter;
