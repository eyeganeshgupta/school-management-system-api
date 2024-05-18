const AysncHandler = require("express-async-handler");
const AcademicTerm = require("../../model/Academic/AcademicTerm");
const Admin = require("../../model/Staff/Admin");

// ! @desc Create Academic Term Year
// ! @route POST /api/v1/academic-terms
// ! @acess  Private
exports.createAcademicTermCtrl = AysncHandler(async (req, res) => {
  const { name, description, duration } = req.body;

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
    createdBy: req.userAuth._id,
  });

  // TODO: push academic into admin
  const admin = await Admin.findById(req.userAuth._id);
  admin.academicTerms.push(academicTermCreated._id);
  await admin.save();

  res.status(201).json({
    status: "success",
    message: "Academic term created successfully",
    data: academicTermCreated,
  });
});

// ! @desc  get all Academic terms
// ! @route GET /api/v1/academic-terms
// ! @acess  Private
exports.getAcademicTermsCtrl = AysncHandler(async (req, res) => {
  const academicTerms = await AcademicTerm.find();

  res.status(201).json({
    status: "success",
    message: "Successfully retrieved the academic terms.",
    data: academicTerms,
  });
});
