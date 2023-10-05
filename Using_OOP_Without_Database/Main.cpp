

/*

Name : Ashvin Kumhar

Roll No : 20BIT073

subject : Educative Initiatives Oncampus Task Submission

Problem Statement : Imagine you are developing the backend for an EdTech platform that aims to host virtual classrooms. Your task is to create a terminal-based
                    Virtual Classroom Manager that handles class scheduling, student attendance, and assignment submissions.


*/



#include<bits/stdc++.h>
using namespace std;

#include "Student/Student.h"
#include "Assignment/Assignment.h"
#include "Classroom/Classroom.h"
#include "VirtualClassroomManager/VirtualClassroomManager.h"
using namespace std;



int main(){

      //creating the object of the class 
      VirtualClassroomManager  virtualclass;


      //********************************For The Adding classes****************************************
      cout<<"Enter The number of class That want you to add"<<endl;
      int numberofclass;
      cin>>numberofclass;

      while(numberofclass>0){
        cout<<"Enter The Name of The class Which You want to add"<<endl;
        string className;
        cin>>className;
        virtualclass.add_classroom(className);
        numberofclass--;
      }

      cout<<endl;
      cout<<endl;


      //**************************For The Adding Students Inside class*********************************
      cout<<"Enter The Total Number of student You want to add In the classes"<<endl;
      int totalStudent;
      cin>>totalStudent;
      while(totalStudent>0){
        int student_id;
        string class_name;
        string student_name;

        cout<<"Enter The student Id you want to add "<<endl;
        cin>>student_id;
        cout<<"Enter The className in which you want to add the student"<<endl;
        cin>>class_name;
        cout<<"Enter The student Name"<<endl;
        cin>>student_name;

        virtualclass.add_student(student_id,class_name,student_name);
        totalStudent--;
      }

      cout<<endl;
      cout<<endl;


      //*************************For The Listing Out all the classrooms******************************
      cout<<"Listing Out The all classRooms"<<endl;
      virtualclass.list_classrooms(); 
      cout<<endl;
      cout<<endl;


      //************************For The Listing Out the students inside particular class*************
      cout<<"Enter The name of The class in which you want to see all student"<<endl;
      string temp;
      cin>>temp;
      virtualclass.list_students(temp);
      cout<<endl;
      cout<<endl;



      //************************For The scheduling The assignment**********************************
      string assignment_name;
      string assignment_for_class_name;

      cout<<"Enter The class name in which you want to add assignment"<<endl;
      cin>>assignment_for_class_name;

      cout<<"Enter the assignment name "<<endl;
      cin>>assignment_name;
      virtualclass.schedule_assignment(assignment_for_class_name,assignment_name);
      cout<<endl;
      
      
      //*************For The submiting the Assignment by a student in the class***********************
      cout<<"For The assignment submit purpose"<<endl;
      int stdid;
      cout<<"Enter The student Id who want to submit Assignment"<<endl;
      cin>>stdid;
      cout<<"Enter The class Name for which Student want to submit Assignment"<<endl;
      string clasName;
      cin>>clasName;
      cout<<"Enter The Assignment ID for which Student want to submit Assignment"<<endl;
      int assignId;
      cin>>assignId;
      virtualclass.submit_assignment(stdid,clasName,assignId);
      cout<<endl;
      cout<<endl;


      //****************For The Listing Out all classrooms***********************************************
      virtualclass.list_classrooms();
    


    return  0;
}



/*
g++ Assignment/Assignment.cpp Classroom/Classroom.cpp Student/Student.cpp VirtualClassroomManager/VirtualClassroomManager.cpp Main.cpp
*/