
// Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.

// only returning the properties that aren't methods for the three objects



school = createSchool();
foo = school.addStudent('foo', '3rd'),
bar = school.addStudent('bar', '1st'),
qux = school.addStudent('qux', '2nd'),

// school.listStudents()

school.enrollStudent(foo, "Math", 101)
school.enrollStudent(foo, "Advanced Math", 102)
school.enrollStudent(foo, "Physics", 202)
school.enrollStudent(bar, "Math", 101)
school.enrollStudent(qux, "Math", 101)
school.enrollStudent(qux, "Advanced Math", 102)


// school.listStudents()

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);
school.addGrade(bar, 101, 91);
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

// school.listStudents()


// school.getReportCard(foo);
// Math: 95
// Advanced Math: 90
// Physics: In progress

// school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined