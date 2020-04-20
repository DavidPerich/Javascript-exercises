var AddSchedule = {
  $addScheduleSection: $("#addSchedule"),

  formToJson: function(data) {
    const schedules = [];
    for (let i = 0; i < data.length; i += 3) {
      let schedule = data.slice(i, i + 3)
      schedules.push(this.dataSliceToJson(schedule));
    }
    return { schedules: schedules };
  },

  dataSliceToJson: function(data) {
    const schedule = {};
    data.forEach(input => schedule[input.name] = input.value)
    return schedule;
  },

  addSchedule:  (function() {
    let scheduleId = 1;

    return async function() {
      this.staff = await this.getStaff()

      let staffOptionsHtml = this.staffOptionTemplate({staff: this.staff});
      let scheduleHtml = this.scheduleTemplate({ scheduleId});
      $("#schedules").append(scheduleHtml)
      $(`.scheduleSelect`).last().filter("select").append(staffOptionsHtml)
      scheduleId += 1
    }
  })(),

  submitForm: function(e) {
    e.preventDefault();
    let url = $(e.target).attr('action');
    let data = $(e.target).serializeArray();
    let schedules = this.formToJson(data)
    this.sendFormData(url, schedules);
},

sendFormData: function(url, data) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'    }
  })
  .then(res => console.log("success"))
  .catch(res => console.table("fail"))
},

  bindEvents: function() {
    $("#btnAdd").on("click", this.addSchedule.bind(this));
    this.$addScheduleSection.on("submit", "form", this.submitForm.bind(this))
  },

  getTemplates: function() {
    this.staffOptionTemplate = Handlebars.compile($("#staffOptionTemplate").html())
    this.scheduleTemplate = Handlebars.compile($("#scheduleTemplate").html())
  },

  getStaff: async function() {
    const json = await fetch('/api/staff_members')
      .then(resp => resp.json())
      .catch( () => console.log("error getting staff"))

    return json;
  },

  init: async function() {
    // this.staff = await this.getStaff()
    this.getTemplates();
    this.bindEvents();
  },
}

AddSchedule.init()








// init: async function() {
//   this.staff = await this.getStaff();
