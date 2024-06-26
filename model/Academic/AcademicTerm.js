const mongoose = require("mongoose");

const { Schema } = mongoose;

const AcademicTermSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
      default: "6 Months",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AcademicTerm = mongoose.model("AcademicTerm", AcademicTermSchema);

module.exports = AcademicTerm;
