
var me = {
  firstName: "David",
  lastName: "Perich",
};

var mother = {
  firstName: 'Jackie',
  lastName: 'Perich',
};

var father = {
  firstName: 'Jack',
  lastName: 'Perich',
};

var people = {
  currentId: 1,
  collection: [me, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) return;
    person.id = this.nextId()
    this.collection.push(person);
  },

  nextId: function() {
    return this.currentId += 1
  },

  getIndex: function(person) {
    var index = -1
    this.collection.forEach(function (comparator, i) {
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i
      }
    });
    return index;
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },

  remove: function(person) {
    var index = this.getIndex(person);
    if (index === -1 || this.isInvalidPerson(person)) return;

    this.collection.splice(index, 1);
  },

  isValidPerson: function(person) {
    return typeof person.firstName === "string" && typeof person.lastName === "string"
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== "string" || typeof person.lastName !== "string"
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) return;

    var exisitingPersonId = this.getIndex(person);
    if (exisitingPersonId === -1) {
      this.add(person);
      console.log(this.collection)
    } else {
      this.collection[exisitingPersonId] = person;
    }
  }
};


people.rollCall();
people.update({firstName: "Milly", lastName: "Main"})
people.update({firstName: "Mialy", lastName: "Main"})
people.rollCall();
