
// ======= ANGELS JS ======= // 

$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='checkout']").validate({
      // Specify validation rules
      rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
        cardNumber: {
          required: true,
          creditcard: true
        }
      },
      // Specify validation error messages
      messages: {
        cardNumber: "The credit card number you entered apprears to be invalid!"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

 