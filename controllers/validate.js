
function validatePassword(password) {
  var prohibitedReg = /[{}()"'`;:/|\/\[\]\t\r\n]/;
  var isError = prohibitedReg.test(password);
  var tooShort = password.length < 4;
  var tooLong = password.length > 18;
  if (isError || tooShort || tooLong) {
    return {message: 'Password is 4-18 characters, certain characters prohibited.'};
  }
  else {
    return null;
  }
}

function validateUsername(name) {
  /*
  var res = validateUsername('root');
  if (res.message) {
    // error handle
  }
  */
  userReg = /^[a-zA-Z0-9\-_]+$/;
  isOkay = userReg.test(name);
  tooShort = name.length < 4;
  tooLong = name.length > 18
  if (isOkay && !tooShort && !tooLong) {
    return null;
  }
  else {
    return { message: 'Username is letters and numbers only.'}
  }
}

function checkValidity(request) {
  errors = {
    userMessage: '',
    passwordMessage: '',
    confirmMessage: '',
    pass: false
  }
  var userRes = validateUsername(request.username);
  var passRes = validatePassword(request.password);
  if (request.cpassword && (request.cpassword !== request.password)){
    errors.confirmMessage = 'Passwords do not match.'
  }
  if (userRes) {
    errors.userMessage = userRes.message;
  }
  if (passRes) {
    errors.passwordMessage = passRes.message;
  }
  if (!userRes && !passRes && (!request.cpassword || (request.cpassword == request.password))) {
    errors.pass = true;
  }
  
  return errors;
}

module.exports = { checkValidity };