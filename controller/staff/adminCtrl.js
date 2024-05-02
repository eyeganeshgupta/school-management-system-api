const Admin = require("../../model/Staff/Admin");

// ! @desc Register admin
// ! @route POST /api/admins/register
// ! @access Private
exports.registerAdminCtrl = async (request, response) => {
  const { name, email, password } = request.body;
  try {
    // TODO: check if user already exists
    const adminAlreadyExists = await Admin.findOne({ email });
    if (adminAlreadyExists) {
      response.json("Admin already exists");
    }

    const admin = await Admin.create({
      name,
      email,
      password,
    });

    response.status(201).json({
      status: "success",
      data: admin,
    });
  } catch (error) {
    response.json({
      status: "failed",
      error: error?.message,
    });
  }
};

// ! @desc Login admin
// ! @route POST /api/admins/login
// ! @access Private
exports.loginAdminCtrl = (request, response) => {
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
};

// ! @desc Get all admin
// ! @route GET /api/admins/
// ! @access Private
exports.getAllAdminCtrl = (request, response) => {
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
};

// ! @desc Get single admin
// ! @route GET /api/admins/:id
// ! @access Private
exports.getAdminCtrl = (request, response) => {
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
};

// ! @desc Update admin
// ! @route PUT /api/admins/:id
// ! @access Private
exports.updateAdminCtrl = (request, response) => {
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
};

// ! @desc Delete admin
// ! @route DELETE /api/admins/:id
// ! @access Private
exports.deleteAdminCtrl = (request, response) => {
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
};

// ! @desc Admin suspending teacher
// ! @route PUT /api/admins/suspend/teacher/:id
// ! @access Private
exports.suspendTeacherCtrl = (request, response) => {
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
};

// ! @desc Admin un-suspending teacher
// ! @route PUT /api/admins/unsuspend/teacher/:id
// ! @access Private
exports.unsuspendTeacherCtrl = (request, response) => {
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
};

// ! @desc Admin withdrawing teacher
// ! @route PUT /api/admins/withdraw/teacher/:id
// ! @access Private
exports.withdrawTeacherCtrl = (request, response) => {
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
};

// ! @desc Admin un-withdrawing teacher
// ! @route PUT /api/admins/unwithdraw/teacher/:id
// ! @access Private
exports.unwithdrawTeacherCtrl = (request, response) => {
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
};

// ! @desc Admin publishing examination result
// ! @route PUT /api/admins/publish/exam/:id
// ! @access Private
exports.publishExamCtrl = (request, response) => {
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
};

// ! @desc Admin un-publishing examination result
// ! @route PUT /api/admins/unpublish/exam/:id
// ! @access Private
exports.unpublishExamCtrl = (request, response) => {
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
};
