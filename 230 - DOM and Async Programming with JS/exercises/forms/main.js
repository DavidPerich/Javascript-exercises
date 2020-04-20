// Rules

// The first name, last name, password, and email fields are all required.
// The phone number is optional.
// Password must be at least 10 characters long.
// Phone number must use US-style numbers: 111-222-3333.
// Email should conform to the constraint validation pattern .+@.+ (see below).

// When a form field loses focus, validate the field value against the validation rule for that field. If the value is not valid, display a red error message to the right of the field. You may also want to add a red border to the input element. The error message should describe what the program expects, e.g., "The password is required."
// When a field with an error regains focus, the message should disappear. It should not reappear after the user corrects the field.
// When the user clicks the Submit button, don't send the form to the server if it has any validation errors. Instead, display an error message at the top of the page that says "Fix errors before submitting this form."
// The form validation error message should disappear when the user corrects all fields with an error.

// Use HTML5 constraint validation API and the pattern attribute to implement validations. MDN has a nice article on form validation. Read the section on constraint validation API.


// using the api

// add event listener

// call the setCustomValidity() method
  // if its passed an empty string it means its satistified
  // if it passed any other string then there is an error and the string is the error message displayed

  // var element = get element some way

  // set event listener on element

  // if (some check for invalid input ) {
    // element.setCustomValidity("This wasn't vlaid for this reason")
  // } else {
  //   element.setCustomValidity("")
  // }

  var App = {
    init: function() {
      this.bindEventHandlers()
    },

    bindEventHandlers: function() {
      $("input").on("focus", this.errorOff);
      $("input[type=password]").on("blur", this.passwordValidation)
      $("input[type=email]").on("blur", this.emailValidation);
      $("input[name=phone]").on("blur", this.phoneValidation);
      $("form").on("submit", this.formValidation.bind(this));
    },

    formValidation: function(e) {
      e.preventDefault();
      const $errors = $(e.currentTarget).find(".error:hidden");

      debugger;

      // how do you stop an empty form
      if ($errors.length > 0) {
        $("#header-error").show();
      } else {
        $("#header-error").hide();
        // $form.submit()
      }
    },

    passwordValidation: function() {
      const $input = $(this)
      if ($input.val().length < 10 ) {
        $input.next(".error").text("Password must be at least 10 characters long").show()
      }
    },

    errorOff: function(e) {
      const $input = $(e.target);
      $input.next(".error").hide();
    },

    emailValidation: function (e) {
      const $input = $(this);
      const regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/
      if (!regex.test($input.val())) {
        // debugger;
        $input.next(".error").text("Please Enter a valid email.").show()
      }
    },

    phoneValidation: function (e) {
      const $input  = $(this);
      const regex = /\d{4}-\d{3}-\d{3}/
      if ($input.val().length > 0 && !regex.test($input.val) ) {
        $input.next(".error").text("Please Enter a valid Phone Number.").show()

      }
    }
  }


App.init()
