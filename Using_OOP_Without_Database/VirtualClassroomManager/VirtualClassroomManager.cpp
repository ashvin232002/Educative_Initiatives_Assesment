#include "VirtualClassroomManager.h"

// Constructor implementation
VirtualClassroomManager::VirtualClassroomManager() {
    this->assignment_id_counter = 0;
}

/************************Functionalities For class Management***********************************/

// Add a classRoom

void VirtualClassroomManager::add_classroom(std::string &class_name)
{
    Classroom classRoom(class_name);
    classrooms.emplace_back(classRoom);
    std::cout << "The class " << class_name << " has been created." << std::endl;
}


// List out all the classRooms

void VirtualClassroomManager::list_classrooms()
{
    std::cout << "The List of classrooms are: " << std::endl;
    for (auto &it : classrooms)
    {
        std::cout << "class name: " << it.name << std::endl;
    }
    std::cout << std::endl;
}

// Remove The classRoom with given name

void VirtualClassroomManager::remove_classroom(std::string &class_name)
{
    bool flag = false;
    for (auto &it : classrooms)
    {
        if (it.name == class_name)
        {
            flag = true;
            break;
        }
    }

    if (!flag)
    {
        // if class not exist with this name
        std::cout << "No class found with this name: " << class_name << std::endl;
    }
    else
    {
        auto it = std::remove_if(classrooms.begin(), classrooms.end(),
                                 [class_name](const Classroom &classroom)
                                 {
                                     return classroom.name == class_name;
                                 });

        if (it != classrooms.end())
        {
            classrooms.erase(it, classrooms.end());
            std::cout << "The classroom " << class_name << " has been removed." << std::endl;
        }
    }
}


/*****************************STUDENT MANAGEMENT**************************************/

// Add a student inside class
void VirtualClassroomManager::add_student(int &student_id, std::string &class_name, std::string &studentName) {
    bool flag = false;
    for (auto &it : classrooms) {
        if (it.name == class_name) {
            flag = true;
            it.students.emplace_back(Student(student_id, studentName));
            std::cout << "Student with ID: " << student_id << " Name: " << studentName
                      << " has been successfully enrolled in: " << class_name << std::endl;
            break;
        }
    }

    if (!flag) {
        std::cout << "This class doesn't exist. Please try again." << std::endl;
    }
}

// List out all students in a particular class
void VirtualClassroomManager::list_students(std::string &class_name) {
    bool flag = false;
    for (auto &it : classrooms) {
        if (it.name == class_name) {
            std::cout << "List of students in " << class_name << " : " << std::endl;
            for (auto &stu : it.students) {
                std::cout << stu.name << " (ID: " << stu.student_id << ")" << std::endl;
            }
            flag = true;
        }
    }

    if (!flag) {
        std::cout << "The class " << class_name << " doesn't exist. Please try again." << std::endl;
    }
}

/*****************************ASSIGNMENT MANAGEMENT**************************************/


// Assignment Management

void VirtualClassroomManager::schedule_assignment(std::string &class_name, std::string &assignment_details)
{
    int assignment_id = assignment_id_counter++;
    Assignment assignment(assignment_id, assignment_details);

    bool flag = false;
    for (auto &it : classrooms)
    {
        if (it.name == class_name)
        {
            it.assignments.push_back(assignment);
            std::cout << "Assignment for " << class_name << " has been scheduled." << std::endl;
            flag = true;
            break;
        }
    }

    if (!flag)
    {
        std::cout << "Classroom " << class_name << " not found. Please try again." << std::endl;
    }
}

void VirtualClassroomManager::submit_assignment(int &student_id, std::string &class_name, int &assignment_id)
{
    for (auto &classroom : classrooms)
    {
        if (classroom.name == class_name)
        {
            for (auto &student : classroom.students)
            {
                if (student.student_id == student_id)
                {
                    for (auto &assignment : classroom.assignments)
                    {
                        if (assignment.assignment_id == assignment_id)
                        {
                            // Check if the student has already submitted
                            if (std::find(assignment.submitted_by_students.begin(),
                                          assignment.submitted_by_students.end(),
                                          student_id) != assignment.submitted_by_students.end())
                            {
                                std::cout << "Student (ID: " << student_id << ") has already submitted this assignment." << std::endl;
                            }
                            else
                            {
                                assignment.submitted_by_students.push_back(student_id);
                                std::cout << "Assignment submitted by student (ID: " << student_id << ") in "
                                          << class_name << "." << std::endl;
                            }
                            return;
                        }
                    }
                    std::cout << "Assignment with ID " << assignment_id << " not found." << std::endl;
                    return;
                }
            }
            std::cout << "Student " << student_id << " not found in '" << class_name << "'." << std::endl;
            return;
        }
    }
    std::cout << "Classroom '" << class_name << "' not found." << std::endl;
}
