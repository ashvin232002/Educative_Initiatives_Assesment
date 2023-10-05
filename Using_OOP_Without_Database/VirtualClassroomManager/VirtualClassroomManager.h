#ifndef VIRTUAL_CLASSROOM_MANAGER_H
#define VIRTUAL_CLASSROOM_MANAGER_H

#include <vector>
#include <iostream>
#include "../Classroom/Classroom.h"

class VirtualClassroomManager {
private:
    std::vector<Classroom> classrooms;
    int assignment_id_counter;

public:
    // Constructor
    VirtualClassroomManager();

    /************************Functionalities For class Management***********************************/

    // Add a classRoom
    void add_classroom(std::string &class_name);

    // List out all the classRooms
    void list_classrooms();

    // Remove The classRoom with given name
    void remove_classroom(std::string &class_name);

    /*****************************STUDENT MANAGEMENT**************************************/

    // Add a student inside class
    void add_student(int &student_id, std::string &class_name, std::string &studentName);

    // List out all students in a particular class
    void list_students(std::string &class_name);

    /*****************************ASSIGNMENT MANAGEMENT**************************************/

    // Schedule an assignment for a class
    void schedule_assignment(std::string &class_name, std::string &assignment_details);

    // Submit an assignment by a student
    void submit_assignment(int &student_id, std::string &class_name, int &assignment_id);
};

#endif
