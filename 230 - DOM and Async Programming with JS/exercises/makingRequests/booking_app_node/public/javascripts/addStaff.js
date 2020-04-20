var AddStaff = {
  $form: $("#addStaff form"),

  formToJson: function(data) {
    var json = {};
    data.forEach(input => json[input.name] = input.value)
    return json;
  },

  submitForm: function(e) {
    e.preventDefault();
    let url = $(e.target).attr('action');

    let data = $(e.target).serializeArray();
    let json = this.formToJson(data)

    if (this.invalidEmail(json.email) || this.invalidName(json.name) ) {
      alert("Staff can not be created. Check your inputs");
    } else {
      this.sendFormData(url, json);
    }
 },

 invalidEmail: function(email) {
  const validEmailPattern = /^.+@.+$/

  return (!validEmailPattern.test(email));
 },

 invalidName: function(name) {
  return name.length === 0;
 },

 sendFormData: function(url, data) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'    }

  })
  .then(res => res.json())
  .then(data => alert(`succesfully created staff member with id: ${data.id}`))
  .catch(res => console.table("fail"))
 },

//  sendFormData: function(url, data) {
//   $.ajax({
//     url,
//     type: "POST",
//     data,
//     contentType: 'application/json'
//   })

//   .done(function(response) {
//     alert(`succesfully created staff member with id: ${response.id}`)
//   })
//   .fail((json) => console.table("fail"))
//  },

  init: function() {
    this.$form.on("submit", this.submitForm.bind(this))
  },
}

AddStaff.init()