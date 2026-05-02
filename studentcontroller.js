const Student = require("./student");

exports.createstudent = async (req, res) => {
  try {
    const { name, marks, course } = req.body;
    if (!name || !marks || !course) {
      return res
        .status(400)
        .json({ error: "Name, marks, and course are required" });
    }
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getstudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.gettopper = async (req, res) => {
  try {
    const topper = await Student.findOne().sort({ marks: -1 });
    if (!topper) {
      return res.status(404).json({ error: "No students found" });
    }
    res.json(topper);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getbyid = async (req, res) => {
  try {
    const student = await Student.findOne({ id: req.params.id });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatestudent = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "No update data provided" });
    }
    const student = await Student.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true },
    );
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletestudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ id: req.params.id });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
