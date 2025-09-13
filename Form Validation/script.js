$(document).ready(function () {
  $('#togglePassword').on('change', function () {
    const type = $('#password').attr('type') === 'password' ? 'text' : 'password';
    $('#password').attr('type', type);
  });

  $('#registrationForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();
    const password = $('#password').val();

    let message = '';
    let isValid = true;

    // Name check
    if (!name) {
      message += 'Name is required.<br>';
      isValid = false;
    }

    // Email check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      message += 'Invalid email format.<br>';
      isValid = false;
    }

    // Phone check
    if (!/^\d{10}$/.test(phone)) {
      message += 'Phone must be exactly 10 digits.<br>';
      isValid = false;
    }

    // Password check
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
      message += 'Password must be at least 6 characters, include uppercase, lowercase, and a number.<br>';
      isValid = false;
    }

    $('#messageBox').html(message).removeClass('error success').addClass(isValid ? 'success' : 'error').show();

    if (isValid) {
      $('#messageBox').html('Form submitted successfully!');
      this.reset();
    }
  });
});
