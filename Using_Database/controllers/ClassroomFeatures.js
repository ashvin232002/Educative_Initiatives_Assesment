const Classroom = require("../models/Classroom");

//add classroom
const addClassroom = (className) => {
  Classroom.findOne({ ClassName: className }).then((existingClass) => {
    if (existingClass) {
      console.error(`Classroom ${className} already exists`);
    } else {
      //classroom not exists
      Classroom.create({ ClassName: className }).then((newClassroom) => {
        console.info(`New Classroom ${newClassroom.ClassName} Added`);
      }).catch((error) => {
        console.error('Error creating classroom:', error);
      });
    }
  }).catch((error) => {
    console.error('Error checking for existing classroom:', error);
  });
}

//remove class
const removeClassroom = (className) => {
  Classroom.findOneAndDelete({ ClassName: className }).then((deletedClassroom) => {
    if (deletedClassroom) {
      console.info(`Classroom ${deletedClassroom.ClassName} Removed`);
    } else {
      console.error(`Classroom ${className} not found`);
    }
  }).catch((error) => {
    console.error('Error removing classroom:', error);
  });
}

//list classroom
const listClassrooms = () => {
  Classroom.find().then((classrooms) => {
    if (classrooms.length > 0) {
      console.info('List of Classrooms:');
      classrooms.forEach((classroom) => {
        console.info(classroom.ClassName);
      });
    } else {
      console.info('No classrooms found');
    }
  }).catch((error) => {
    console.error('Error listing classrooms:', error);
  });
}

module.exports = {
  removeClassroom,
  listClassrooms,
  addClassroom
};

