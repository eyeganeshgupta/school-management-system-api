const express = require("express");
const {
  registerAdminCtrl,
  loginAdminCtrl,
  getAllAdminCtrl,
  getAdminCtrl,
  updateAdminCtrl,
  deleteAdminCtrl,
  suspendTeacherCtrl,
  unsuspendTeacherCtrl,
  withdrawTeacherCtrl,
  unwithdrawTeacherCtrl,
  publishExamCtrl,
  unpublishExamCtrl,
} = require("../../controller/staff/adminCtrl");
const isLogin = require("../../middlewares/isLogin");

const adminRouter = express.Router();

// * admin register
adminRouter.post("/register", registerAdminCtrl);

// * admin login
adminRouter.post("/login", loginAdminCtrl);

// * admin - getAllAdmin
adminRouter.get("/", getAllAdminCtrl);

// * admin - getSingleAdmin
adminRouter.get("/:id", isLogin, getAdminCtrl);

// * update admin
adminRouter.put("/:id", updateAdminCtrl);

// * delete admin
adminRouter.delete("/:id", deleteAdminCtrl);

// * admin suspending teacher
adminRouter.put("/suspend/teacher/:id", suspendTeacherCtrl);

// * admin un-suspending teacher
adminRouter.put("/unsuspend/teacher/:id", unsuspendTeacherCtrl);

// * admin withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", withdrawTeacherCtrl);

// * admin unwithdrawing teacher
adminRouter.put("/unwithdraw/teacher/:id", unwithdrawTeacherCtrl);

// * admin publishing examination result
adminRouter.put("/publish/exam/:id", publishExamCtrl);

// * admin unpublishing examination result
adminRouter.put("/unpublish/exam/:id", unpublishExamCtrl);

module.exports = adminRouter;
