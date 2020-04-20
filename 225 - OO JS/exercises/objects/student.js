// Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

// info: Logs the name and year of the student.
// addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
// listCourses: Returns a list of the courses student has enrolled in.
// addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
// updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
// viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

// Problem
// make an object factory - so the output will be an object that can has teh properties listed - which behave in the expected way
  //  createStudent - accepts a name and a year and returns an object that has name and year as properties + the following properties
  //  info - a function that when called logs to the console the a string e.g Foo is a 1st year student'
  // listCourses - a function which returns an array which represents the courses a student participates in
  // addcourse - returns a function that accepts an object (reppresenting a course) and adds that course to the courses array
    // courses have a name property and a code property
  // addnote - a function that accepts two arguments, an integer repreenting courseCode and a string representing a note
  // viewNotes - a functiont that returns a string which is a concatenation of the course name plus the current notes
    // e.g "Math: Fun Course; Remember to study for algebra"
  // updateNotes - a function that accepts a course code integer and a string representing a note and overwrites teh existing notes for a course

// algorithm
// how to store courses - going to try to use IIFE

function createStudent(name, year) {
  function findCourse(courses, courseCode) {
    return courses.find((course) => course.code === courseCode);
  }

  return (function () {
    var courses = [];
    return {
      name: name,
      year: year,
      info: function () {
        console.log(this.name + " is a " + year + " year student");
      },
      listCourses: function () {
        console.log(courses);
      },
      addCourse: function(course) {
        courses.push(course);
      },
      addNote: function(coursecode, note) {
        let course = findCourse(courses, coursecode);
        if (course.notes) {
          course.notes.push(note);
        } else {
          course.notes = [note];
        }
      },
      viewNotes: function() {
        courses.forEach(function(course) {
          if (course.notes) {
            console.log(course.name + ": " + course.notes.join("; "));
          }
        });
      },
      updateNote: function(courseCode, note) {
        let course = findCourse(courses, courseCode);
        course.notes = [note]
      }
    }
  })();


}


foo = createStudent('Foo', '1st');
console.log(foo.name)
foo.info();
// 'Foo is a 1st year student'
foo.listCourses();
// // [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.listCourses()
foo.viewNotes();
// "Math: Fun Course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun Course; Remember to study for algebra"
// "Advance Math: Difficult Subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun Course"
// "Advance Math: Difficult Subject"