const express = require('express')
const moongose = require('moongose')
const studentroutes=require("/studentRoute")

const app = express()
app.use(express.json)

moongose.connect("")

app.use("/students",studentRoute)

app.listen(3000, ()=> console.log("Server is started on port 3000"))