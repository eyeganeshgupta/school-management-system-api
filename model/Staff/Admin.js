const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    email: {
      type: String,
      requied: true,
    },
    password: {
      type: String,
      requied: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    academicTerms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AcademicTerm",
      },
    ],
    academicYears: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AcademicYear",
      },
    ],
    classLevels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassLevel",
      },
    ],
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// TODO: hash password
AdminSchema.pre("save", async function (next) {
  // * If user is not modifying the password, then simply move to the next middleware
  if (!this.isModified("password")) {
    next();
  }

  // TODO: 01. create salt
  const salt = await bcrypt.genSalt(10);
  // TODO: 02. Hash password
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// TODO: verify password
AdminSchema.methods.verifyPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// ! model
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
