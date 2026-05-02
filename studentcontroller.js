const Student= require("/student")
exports.createstudent = async (req, res) => {
  const student = await Student.create(req.body)
  res.status(201).json(student)
}
exports.getstudent = async(req,res) => {
    const students = await Student.find()
    res.json(students)
}
exports.gettoper = async(req,res)=>{
    const topper = await Student.findOne().sort({ marks: -1 })
    res.json(topper)
}
exports.getbyid = async(req,res)=>{
    const student = await Student.findById(req.params.id)
    if (!student) {
        return res.status(404).json({ error: "Student not found" })
    }
    res.json(student)
}
exports.updatestudent = async(req,res)=>{
    const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if (!student) {
        return res.status(404).json({ error: "Student not found" })
    }
    res.json(student)
}
exports.deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id)
  if (!student) return res.status(404).json({ error: "Student not found" })
  res.json({ message: "Student deleted" })
}