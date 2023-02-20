let login_attempts = 3;
function check_form() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  login_attempts = login_attempts - 1;
  if (username == 'admin' && password == '123') {
    alert('You Have Successfully Logged In');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  } else {
    if (login_attempts <= 0) {
      alert('You Have Failed to login');
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
      document.getElementById('submit').disabled = true;
      document.getElementById('form1').disabled = true;
    } else {
      alert('Login Failed! - Only ' + login_attempts + ' More Attempts');
    }
  }
  return false;
}
