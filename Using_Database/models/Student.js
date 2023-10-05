
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true, 
  },
  studentName: {
    type: String,
    required: true, 
  },
  className: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", StudentSchema);

