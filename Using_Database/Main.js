
const { Command } = require('commander');
const { prompt } = require('inquirer');


const { addClassroom,removeClassroom, listClassrooms } = require("./controllers/ClassroomFeatures")
const { addStudent, listStudents } = require("./controllers/StudentFeatures")
const { scheduleAssignment, submitAssignment } = require('./controllers/AssignmentFeatures');


const program = new Command();
//commander nodejs package using

const questionsForClassroom = [
  {
    type: 'input',
    name: 'ClassName',
    message: 'Enter Name of classroom'
  }
];

const questionsForStudent = [
  {
    type: 'input',
    name: 'studentID',
    message: 'Enter the studentID'
  },
  {
    type: 'input',
    name: 'studentName',
    message: 'Enter the studentName'
  },
  {
    type: 'input',
    name: 'className',
    message: 'Enter the Name of classroom'
  },
]



const questionsForAssignment = [
  {
    type: 'input',
    name: 'AssignmentID',
    message: 'Enter the Assignment ID',
  },
  {
    type: 'input',
    name: 'AssignmentDetail',
    message: 'Enter the Assignment Detail',
  },
  {
    type: 'input',
    name: 'className',
    message: 'Enter the Classroom Name',
  },
];
const questionsForAssignmentSubmission = [
  {
    type: 'input',
    name: 'studentID',
    message: 'Enter the Student ID:',
  },
  {
    type: 'input',
    name: 'className',
    message: 'Enter the Class Name:',
  },
  {
    type: 'input',
    name: 'assignmentID',
    message: 'Enter the Assignment ID:',
  },
];


program
  .command('add_classroom')
  .alias('add')
  .description('Add a classroom')
  .action(() => {
    prompt(questionsForClassroom).then(answers => {
      addClassroom(answers.ClassName)
    });
  });



program
  .command('add_student')
  .alias('ad')
  .description('Add a student')
  .action(() => {
    prompt(questionsForStudent).then(answers => {
      addStudent(answers.studentID, answers.studentName, answers.className);
    });
  });




program
  .command('remove_classroom')
  .alias('re')
  .description('Remove a classroom')
  .action(() => {
    prompt(questionsForClassroom).then(answers => {
      removeClassroom(answers.ClassName)
    });
  });



program
  .command('list_classrooms')
  .alias('lis')
  .description('List all classrooms')
  .action(() => {
    listClassrooms();
  });



program
  .command('list_students')
  .alias('list')
  .description('List students in a classroom')
  .action(() => {
    prompt(questionsForClassroom).then(answers => listStudents(answers.ClassName));
  });



program
  .command('schedule_assignment')
  .alias('sac')
  .description('Schedule a new assignment')
  .action(() => {
    prompt(questionsForAssignment).then((answers) => {
      scheduleAssignment(answers.AssignmentID, answers.AssignmentDetail, answers.className);
    });
  });


program
  .command('submit_assignment')
  .alias('sub')
  .description('Submit an assignment')
  .action(() => {
    prompt(questionsForAssignmentSubmission).then(answers => {
      submitAssignment(answers.studentID, answers.className, answers.assignmentID);
    });
  });


program.parse(process.argv);
