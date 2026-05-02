const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name:{type:String},
    marks:{type:Number},
    course:{type:String}
}, {
    versionKey: false
})

// Auto-increment ID before save
studentSchema.pre('save', async function(next) {
    if (this.isNew) {
        try {
            const lastStudent = await this.constructor.findOne().sort({ id: -1 })
            this.id = lastStudent && lastStudent.id ? lastStudent.id + 1 : 1
        } catch (error) {
            this.id = 1
        }
    }
    next()
})

module.exports=mongoose.model("Student",studentSchema)