const Classroom=require("../models/Classroom")
const Student=require("../models/Student")


  
//listing out all the students inside a class
  const listStudents = async (className) => {
    try {
      //find classroom
      const classroom = await Classroom.findOne({ ClassName: className }).populate('EnrolledStudents');
  
      //classroom not find
      if (!classroom) {
        console.error(`Classroom ${className} not found`);
        return;
      }
  
      if (!classroom.EnrolledStudents || classroom.EnrolledStudents.length === 0) {
        console.info(`No students found in Classroom ${className}`);
        return;
      }
  
      console.info(`List of Students in Classroom ${className}:`);

      //traversing into the array of objects
      classroom.EnrolledStudents.forEach(student => {
        console.info(`Student Name: ${student.studentName}, Student ID: ${student.studentID}`);
      });
    } catch (error) {
      console.error('Error listing students:', error);
    }
  };
  


//adding student inside a class
const addStudent = async (studentID, studentName, className) => {
  try {
   
    //finding a class
    const classroom = await Classroom.findOne({ ClassName: className });

    //if class not exists
    if (!classroom) {
      console.error(`Classroom ${className} not found`);
      return;
    }

    //add student inside class
    const student = new Student({
      studentID: studentID, 
      studentName: studentName, 
      className: className,
    });

    await student.save();

    //pushing into the array of objects
    classroom.EnrolledStudents.push(student);

    await classroom.save();

    console.info(`Student ${studentName} (ID: ${studentID}) added to Classroom ${className}`);
  } catch (error) {
    console.error('Error adding student:', error);
  }
};



module.exports = {
    
    listStudents,
    addStudent
  };
  
  
  