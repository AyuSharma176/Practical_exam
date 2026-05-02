const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    name: { type: String },
    marks: { type: Number },
    course: { type: String },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model("Student", studentSchema);
