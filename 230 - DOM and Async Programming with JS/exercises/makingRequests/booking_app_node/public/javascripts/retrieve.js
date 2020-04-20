var Retrieve = {
  init: function() {
    $("#retrieveSchedules button").on("click", this.retrieveSchedules.bind(this));
  },

  retrieveSchedules:  function(e) {
     fetch('/api/schedules')
      .then(resp => resp.json())
      .then( (json) => this.schedulesAlert(json))
      .catch(function(x) {
      })
  },

  schedulesAlert(json) {
    const schedules = json.filter(schedule => schedule.student_email === null);
    const scheduleSummary = this.scheduleSummary(schedules);


    if (schedules.length === 0) {
      alert ("There are currently no scheduls available for booking")
    }

    alert(scheduleSummary.map(s => `staff_${s.staff_id}: ${s.numAvailable}`)
      .join("\n"))
  },

  scheduleSummary: function(schedules) {
    const staff = [];

    schedules.forEach(function({ staff_id, date, time }) {
      let staffMember = staff.find(s => s.staff_id === staff_id);

      if (!!staffMember) {
        staffMember.availability.push({ date, time })
        staffMember.numAvailable += 1
      } else {
        staff.push({
          staff_id,
          availability: [{date, time}],
          numAvailable:  1,
        });
      }
    });
    return staff;
  },
}

Retrieve.init()

