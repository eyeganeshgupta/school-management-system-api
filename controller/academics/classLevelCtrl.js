const AysncHandler = require("express-async-handler");
const ClassLevel = require("../../model/Academic/ClassLevel");
const Admin = require("../../model/Staff/Admin");

// ! @desc  Create Class Level
// ! @route POST /api/v1/class-levels
// ! @acess  Private
exports.createClassLevelCtrl = AysncHandler(async (request, response) => {
  const { name, description, duration } = request.body;

  // TODO: check if exists
  const classFound = await ClassLevel.findOne({ name });
  if (classFound) {
    throw new Error("Class already exists");
  }

  // TODO: create
  const classCreated = await ClassLevel.create({
    name,
    description,
    createdBy: request.userAuth._id,
  });

  // TODO: push class into admin
  const admin = await Admin.findById(request.userAuth._id);
  admin.classLevels.push(classCreated._id);
  // * save
  await admin.save();

  response.status(201).json({
    status: "success",
    message: "Class creation completed successfully.",
    data: classCreated,
  });
});

// ! @desc  get all class levels
// ! @route GET /api/v1/class-levels
// ! @acess  Private
exports.getClassLevels = AysncHandler(async (request, response) => {
  const classes = await ClassLevel.find();
  response.status(200).json({
    status: "success",
    message: "Class Levels fetched successfully",
    data: classes,
  });
});

// ! @desc  get single Class level
// ! @route GET /api/v1/class-levels/:id
// ! @acess  Private
exports.getClassLevel = AysncHandler(async (request, response) => {
  const classLevel = await ClassLevel.findById(request.params.id);
  response.status(200).json({
    status: "success",
    message: "Class fetched successfully",
    data: classLevel,
  });
});
