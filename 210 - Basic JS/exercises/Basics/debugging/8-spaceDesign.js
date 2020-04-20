// We're putting together some information about our new company Space Design. Not all roles have been filled yet. But although we have a CEO and Scrum Master, displaying them shows undefined. Why is that?

// Roles (salary still to be determined)

var ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

var developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

var scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

var team = {};

team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;

var company = {
  name: 'Space Design',
  team: team,
  projectedRevenue: 500000,
};
console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team['ceo']);
console.log('Scrum master: ' + company.team['scrumMaster']);
console.log('Projected revenue: $' + company.projectedRevenue);

// because there is a variable named ceo and scrumMaster that contain objects. When we write team[ceo] we are creating a property that has a key that is that object.  Most relevant here is that when we use bracket notation to assign or access an object property, the expression inside the brackets must be a string value; if it is not, JavaScript will convert it into one.

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000