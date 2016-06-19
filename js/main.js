(function() {
  "use strict";
  var email = document.querySelectorAll('.form-control.email')[0];
  var zip = document.querySelectorAll('.form-control.zip')[0];
  var submit = document.querySelectorAll('.btn.submit')[0];

  function updateSubmitState() {
    if (zip.isValid() && email.isValid()) {
      submit.className = submit.className.replace('disabled', 'enabled');
    } else {
      submit.className = submit.className.replace('enabled', 'disabled');
    }
  }

  zip.onkeyup = updateSubmitState;
  email.onkeyup = updateSubmitState;

  zip.isValid = function() {
    return this.value.length >= 5;
  };

  email.isValid = function() {
    return /(.+)@(.+){2,}\.(.+){2,}/.test(this.value);
  };

  // Zips can only be numbers, tabs and backspace
  zip.onkeydown = function(e) {
    if (e.keyCode > 47 && e.keyCode < 58 || e.keyCode === 9 || e.keyCode === 8) {
      return true;
    } else {
      return false;
    }
  };

  submit.onclick = function() {
    if (submit.className.indexOf('enabled') === -1) {
      return;
    }
    var zipTag = document.querySelectorAll('.zip')[0];
    var emailTag = document.querySelectorAll('.email')[0];
    submit.className = submit.className.replace('enabled', 'success');
    submit.innerHTML = "You're in!";
  };
})();
