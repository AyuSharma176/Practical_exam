const express = require("express");
const mongoose = require("mongoose");
const studentroutes = require("./studentRoute");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://ayush:ayush123@cluster0.ald0tdm.mongodb.net/");

app.use("/students", studentroutes);

app.listen(3000, () => console.log("Server is started on port 3000"));
