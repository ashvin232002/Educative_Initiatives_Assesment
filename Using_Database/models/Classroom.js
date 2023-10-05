const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema({
  ClassName: {
    type: String,
    required: true,
  },
  EnrolledStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student', 
    },
  ],
  ScheduledAssignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assignment',
    },
  ],
});

module.exports = mongoose.model("Classroom", ClassroomSchema);
