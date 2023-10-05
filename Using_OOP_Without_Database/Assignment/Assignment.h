#ifndef ASSIGNMENT_H
#define ASSIGNMENT_H

#include <string>
#include <vector>

class Assignment {
public:
    int assignment_id;
    std::string assignment_details;
    std::vector<int> submitted_by_students;

    Assignment(int id, const std::string &assignment_details);
};

#endif
