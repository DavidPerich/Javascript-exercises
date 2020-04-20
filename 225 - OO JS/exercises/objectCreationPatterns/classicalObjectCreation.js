// Implement the following diagram using the pseudo-classical approach. Subclasses should inherit everything from the superclass and not just the methods. Reuse the constructors of the superclass when implementing a subclass.

// Person
// state = firstName, lastName, age, gender
// behaviour = fullName,, communcate(), eat(), sleep()

// Three children
// doctor
// state - specialization
// additional behaviour - diagnose

/// professior
//State - subject
// can teach

/// student
/// degree
/// study()

// gradestudent is a child of student
// state - gradateDegree
// resaerch()

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName,age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log("studying");
}

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName,age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log("researching");
}


function Person (firstName, lastName, age, gender) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,
  this.gender = gender
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName
}

Person.prototype.sleep = function() {
  console.log( "Sleeping" )
}

Person.prototype.eat = function() {
  console.log( "Eating" )
}

Person.prototype.communicate = function() {
  console.log( "Communicating" )
}

function Doctor(firstName, lastName, age, gender, specialization ) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization
}

Doctor.prototype = Object.create(Person.prototype);

Doctor.prototype.diagnose = function() {
  console.log("diagnosing")
}

Doctor.prototype.constructor = Doctor;

// Doctor.prototy


var person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
console.log(person.fullName());            // logs 'foo bar'
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'

var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true

doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'

console.log(Object.getPrototypeOf(doctor))
