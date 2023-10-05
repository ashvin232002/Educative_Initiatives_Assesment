const mongoose = require("mongoose")

const AssignmentSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    AssignmentID: {
        type: String,
        require: true
    },
    submittedByStudents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
        },
    ],
    AssignmentDetail: [{
        type: String,
        required: true
    }],

})

module.exports = mongoose.model("Assignment", AssignmentSchema)