const AsyncHandler = require("express-async-handler");
const AcademicYear = require("../../model/Academic/AcademicYear");
const Admin = require("../../model/Staff/Admin");

// ! @desc Create Academic Year
// ! @route POST /api/v1/academic-years
// ! @access Private
exports.createAcademicYearCtrl = AsyncHandler(async (request, response) => {
  const { name, fromYear, toYear } = request.body;

  // TODO: check if exists
  const academicYear = await AcademicYear.findOne({ name });
  if (academicYear) {
    throw new Error("Academic year already exists");
  }

  // TODO: create academic year
  const academicYearCreated = await AcademicYear.create({
    name,
    fromYear,
    toYear,
    createdBy: request.userAuth._id,
  });

  response.status(201).json({
    status: "success",
    message: "Academic year created successfully!",
    data: academicYearCreated,
  });
});

// ! @desc Get all academic years
// ! @route GET /api/v1/academic-years
// ! @access Private
exports.getAcademicYears = AsyncHandler(async (request, response) => {
  const academicYears = await AcademicYear.find();
  response.status(201).json({
    status: "success",
    message: "Academic years fetched successfully!",
    data: academicYears,
  });
});
