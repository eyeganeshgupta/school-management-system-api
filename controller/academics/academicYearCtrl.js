const AsyncHandler = require("express-async-handler");
const AcademicYear = require("../../model/Academic/AcademicYear");

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
exports.getAcademicYearsCtrl = AsyncHandler(async (request, response) => {
  const academicYears = await AcademicYear.find();
  response.status(200).json({
    status: "success",
    message: "Academic years fetched successfully!",
    data: academicYears,
  });
});

// ! @desc Get single academic year
// ! @route GET /api/v1/academic-years/:id
// ! @access Private
exports.getAcademicYearCtrl = AsyncHandler(async (request, response) => {
  const academicYear = await AcademicYear.findById(request.params.id);

  response.status(200).json({
    status: "success",
    message: "Academic year fetched successfully!",
    data: academicYear,
  });
});

// ! @desc Update Academic year
// ! @route GET /api/v1/academic-years/:id
// ! @access Private
exports.updateAcademicYearCtrl = AsyncHandler(async (request, response) => {
  const { name, fromYear, toYear } = request.body;

  // TODO: check name exits
  const academicYearFound = await AcademicYear.findOne({ name });
  if (academicYearFound) {
    throw new Error("Academic year already exists!");
  }

  const academicYear = await AcademicYear.findByIdAndUpdate(
    request.params.id,
    {
      name,
      fromYear,
      toYear,
      createdBy: request.userAuth._id,
    },
    {
      new: true,
    }
  );

  response.status(201).json({
    status: "success",
    message: "Academic year updated successfully!",
    data: academicYear,
  });
});

// ! @desc Delete Academic year
// ! @route GET /api/v1/academic-years/:id
// ! @access Private
exports.deleteAcademicYearCtrl = AsyncHandler(async (request, response) => {
  await AcademicYear.findByIdAndDelete(request.params.id);

  response.status(200).json({
    status: "success",
    message: "Academic year deleted successfully!",
  });
});
