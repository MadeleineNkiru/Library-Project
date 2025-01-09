// Example: Form validation for login
document.getElementById('login-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (!email || !password) {
      alert('Please fill in both fields!');
  } else {
      alert('Login Successful!');
      window.location.href = 'home.html'; // Redirect to home page
  }
});

// Example: Form validation for signup
document.getElementById('signup-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;

  if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields!');
  } else if (password !== confirmPassword) {
      alert('Passwords do not match!');
  } else {
      alert('Sign Up Successful!');
      window.location.href = 'login.html'; // Redirect to login page
  }
});
