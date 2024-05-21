const express = require("express");
const {
  createClassLevelCtrl,
  getClassLevelCtrl,
  getClassLevelsCtrl,
  updateClassLevelCtrl,
  deleteClassLevel,
} = require("../../controller/academics/classLevelCtrl");

const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");

const classLevelRouter = express.Router();

classLevelRouter
  .route("/")
  .post(isLogin, isAdmin, createClassLevelCtrl)
  .get(isLogin, isAdmin, getClassLevelCtrl);

classLevelRouter
  .route("/:id")
  .get(isLogin, isAdmin, getClassLevelsCtrl)
  .put(isLogin, isAdmin, updateClassLevelCtrl)
  .delete(isLogin, isAdmin, deleteClassLevel);

module.exports = classLevelRouter;
