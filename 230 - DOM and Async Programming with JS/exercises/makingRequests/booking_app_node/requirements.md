Making a booking

h1 schedles


___
## form
  1) select box - select a schedule
  this has list of schedules  with name | date | time
2)  email input bopx
3) submit

 On submit


## If student doesn't exist yet then
  alert - student doesn't exist
  new div
    "please provide new student details"
    "email" - input
    "name" - input
    "booking sequence input - which is prefilled
## If the are completed then
  alert - student succeessfully added


  Overall alert to confirm the boook booking request


## retrieve all registered students
  don't need to use but could potentially do client side validation with this
  // api/students
  GET

  returns array of students
  each student has id, name, email

## adding student to database

  POST api/students

  requires {email, name, booking_sequence}
    // this is proof student tried to book a schedule first
    // only students with booking sequence can be added to database

## booking a schedule

POST api/bookings

id student email
  will respond with `studentNotFound` error if student email doesn't belong to a registered student

  no success data


