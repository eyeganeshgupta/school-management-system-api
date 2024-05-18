const AysncHandler = require("express-async-handler");
const AcademicTerm = require("../../model/Academic/AcademicTerm");
const Admin = require("../../model/Staff/Admin");

// ! @desc Create Academic Term Year
// ! @route POST /api/v1/academic-terms
// ! @acess  Private
exports.createAcademicTermCtrl = AysncHandler(async (request, response) => {
  const { name, description, duration } = request.body;

  // TODO: check if exists
  const academicTerm = await AcademicTerm.findOne({ name });
  if (academicTerm) {
    throw new Error("Academic term already exists");
  }

  // TODO: create
  const academicTermCreated = await AcademicTerm.create({
    name,
    description,
    duration,
    createdBy: request.userAuth._id,
  });

  // TODO: push academic into admin
  const admin = await Admin.findById(request.userAuth._id);
  admin.academicTerms.push(academicTermCreated._id);
  await admin.save();

  response.status(201).json({
    status: "success",
    message: "Academic term created successfully",
    data: academicTermCreated,
  });
});

// ! @desc  get all Academic terms
// ! @route GET /api/v1/academic-terms
// ! @acess  Private
exports.getAcademicTermsCtrl = AysncHandler(async (request, response) => {
  const academicTerms = await AcademicTerm.find();

  response.status(200).json({
    status: "success",
    message: "Successfully retrieved the academic terms.",
    data: academicTerms,
  });
});

// ! @desc  get single Academic term
// ! @route GET /api/v1/academic-terms/:id
// ! @acess  Private
exports.getAcademicTermCtrl = AysncHandler(async (request, response) => {
  const academicTerm = await AcademicTerm.findById(request.params.id);

  response.status(200).json({
    status: "success",
    message: "The academic term has been successfully retrieved.",
    data: academicTerm,
  });
});
