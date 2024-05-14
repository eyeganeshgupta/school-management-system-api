const bcrypt = require("bcryptjs");
const Admin = require("../../model/Staff/Admin");
const AsyncHandler = require("express-async-handler");
const generateToken = require("../../utils/generateToken");
const { hashPassword, isPasswordMatched } = require("../../utils/helpers");

// ! @desc Register admin
// ! @route POST /api/admins/register
// ! @access Private
exports.registerAdminCtrl = AsyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  // TODO: check if admin already exists
  const adminAlreadyExists = await Admin.findOne({ email });
  if (adminAlreadyExists) {
    throw new Error("Admin already exists");
  }

  const admin = await Admin.create({
    name,
    email,
    password: await hashPassword(password),
  });

  response.status(201).json({
    status: "success",
    data: admin,
    message: "Admin registered successfully!",
  });
});

// ! @desc Login admin
// ! @route POST /api/admins/login
// ! @access Private
exports.loginAdminCtrl = AsyncHandler(async (request, response) => {
  const { email, password } = request.body;

  // TODO: find user
  const user = await Admin.findOne({ email });

  if (!user) {
    return response.status(403).json({
      message: "Invalid login credentials",
    });
  }

  // TODO: verify password
  const isMatched = await isPasswordMatched(password, user.password);

  if (!isMatched) {
    return response.status(403).json({
      message: "Invalid login credentials",
    });
  } else {
    return response.status(200).json({
      data: generateToken(user._id),
      message: "Verification successful for admin authentication!",
    });
  }
});

// ! @desc Get admin profile
// ! @route GET /api/admins/:id
// ! @access Private
exports.getAdminProfileCtrl = AsyncHandler(async (request, response) => {
  const admin = await Admin.findById(request.userAuth._id).select(
    "-password -createdAt -updatedAt"
  );
  if (!admin) {
    throw new Error("Admin not found!");
  } else {
    response.status(200).json({
      status: "success",
      data: admin,
      message: "Fetched admin profile successfully!",
    });
  }
});

// ! @desc Get all admin
// ! @route GET /api/admins/
// ! @access Private
exports.getAllAdminCtrl = AsyncHandler(async (request, response) => {
  const admins = await Admin.find();
  response.status(200).json({
    status: "success",
    message: "Admin fetched successfully!",
    data: admins,
  });
});

// ! @desc Update admin
// ! @route PUT /api/admins/:id
// ! @access Private
exports.updateAdminCtrl = AsyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  // TODO: if email is taken
  const emailExist = await Admin.findOne({ email });
  if (emailExist) {
    throw new Error("This email is taken/exist");
  }

  // TODO: check if user is updating the password
  if (password) {
    const admin = await Admin.findByIdAndUpdate(
      request.userAuth._id,
      {
        email,
        password: await hashPassword(password),
        name,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    response.status(201).json({
      status: "success",
      data: admin,
      message: "Admin profile successfully updated.",
    });
  } else {
    const admin = await Admin.findByIdAndUpdate(
      request.userAuth._id,
      {
        email,
        name,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    response.status(201).json({
      status: "success",
      data: admin,
      message: "Admin profile successfully updated.",
    });
  }
});

// ! @desc Delete admin
// ! @route DELETE /api/admins/:id
// ! @access Private
exports.deleteAdminCtrl = async (request, response) => {
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
exports.suspendTeacherCtrl = async (request, response) => {
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
exports.unsuspendTeacherCtrl = async (request, response) => {
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
exports.withdrawTeacherCtrl = async (request, response) => {
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
exports.unwithdrawTeacherCtrl = async (request, response) => {
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
