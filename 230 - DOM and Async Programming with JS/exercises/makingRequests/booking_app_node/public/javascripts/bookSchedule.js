var BookSchedule = {
  init: (function() {
    return function() {
      this.getSchedules()
      this.getTemplates();
      this.bindEvents()
      setTimeout(this.addHTMLOptions.bind(this), 8000)
    }
  })(),


  getTemplates: function() {
    this.scheduleOptionsTemplate = Handlebars.compile($("#scheduleOptionsTemplate").html())
  },

  bindEvents: function() {
    $("#book-schedule > form").on("submit", this.bookSchedule.bind(this));
  },

  bookSchedule: function() {

  },


  addHTMLOptions: function() {
    let scheduleOptionsHTML = this.scheduleOptionsTemplate({schedule: this.schedules});

    $("#book-schedule select").append(scheduleOptionsHTML);
  },

  filterToAvailableSchedules: function(schedules) {
    return schedules.filter(schedule => schedule.student_email === null);
  },


  staff: (async function() {
    let staff = await fetch('/api/staff_members')
      .then(resp => resp.json())
      .catch( () => console.log("error getting staff"))
    return staff
  })(),

  allSchedules: (async function() {
    let schedules = await fetch("/api/schedules")
      .then(resp => resp.json())
      .catch(() => console.log("error with schedules"))

    return schedules
  })(),



  getSchedules: (function() {
    return async function() {
      let staff = await this.staff
      let allSchedules = await this.allSchedules
      let filteredSchedules = this.filterToAvailableSchedules(allSchedules)
      filteredSchedules.forEach(function(schedule) {
          let person = staff.find(person => person.id === schedule.staff_id);
          return schedule["staff_name"] = person.name
        });
    this.schedules = filteredSchedules; ;
    }

  })(),


}

BookSchedule.init()