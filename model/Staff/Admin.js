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

// ! model
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
