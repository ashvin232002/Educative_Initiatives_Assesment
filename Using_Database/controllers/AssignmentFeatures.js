const Assignment  =  require("../models/Assignment");
const Classroom   =  require("../models/Classroom");
const Student     =  require("../models/Student");


//schedule Assignment
const scheduleAssignment = async (AssignmentID, AssignmentDetail, className) => {
  try {
    
    //finding classroom with same name
    const classroom = await Classroom.findOne({ ClassName: className });

    //if classroom not  exists
    if (!classroom) {
      console.error(`Classroom ${className} not found`);
      return;
    }
 
     //adding a assignment
    const assignment = new Assignment({
      AssignmentID: AssignmentID,
      AssignmentDetail: AssignmentDetail,
      className: className, 
    });

    await assignment.save();
   
    //pushing the id to the scheduled assignment
   classroom.ScheduledAssignments.push(assignment);

    await classroom.save();

    console.info(`Assignment ${AssignmentID} scheduled in Classroom ${className}`);
  } catch (error) {
    console.error('Error scheduling assignment:', error);
  }
};


const submitAssignment = async (studentID, className, assignmentID) => {
    try {
      //finding student
      const student = await Student.findOne({ studentID: studentID }); 
  

      //if student not registered
      if (!student) {
        console.error(`Student with ID ${studentID} not found`);
        return;
      }
  
      //finding the classroom
      const classroom = await Classroom.findOne({ ClassName: className }); 
  
      //if classroom not exist
      if (!classroom) {
        console.error(`Classroom ${className} not found`);
        return;
      }
  
      //find the assignment which is scheduled or not
      const assignment = await Assignment.findOne({ AssignmentID: assignmentID }); 
  
      if (!assignment) {
        console.error(`Assignment with ID ${assignmentID} not found`);
        return;
      }
  
      assignment.submittedByStudents.push(student._id);
  
      await assignment.save();
  
      console.info(`Assignment ${assignmentID} submitted by Student ${studentID}`);
  
    } catch (error) {
      console.error('Error submitting assignment:', error);
    }
  };
  

module.exports = {
    scheduleAssignment,
    submitAssignment
};
