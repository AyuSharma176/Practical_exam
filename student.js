const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String },
    marks: { type: Number },
    course: { type: String },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model("Student", studentSchema);
