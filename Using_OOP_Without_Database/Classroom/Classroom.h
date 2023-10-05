#ifndef CLASSROOM_H
#define CLASSROOM_H

#include<bits/stdc++.h>
#include "../Student/Student.h"
#include "../Assignment/Assignment.h"

class Classroom {
public:
    std::string name;
    std::vector<Student> students;
    std::vector<Assignment> assignments;

    Classroom(const std::string &class_name);
};

#endif
