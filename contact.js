var form = document.getElementById('contact-form');
var radios = document.getElementsByName('reason');

for (var i = 0, len = radios.length; i < len; i++) {
  radios[i].onchange = function() {
    toggleShowOrderNum();
  };
}

function toggleShowOrderNum() {
  var orderNumber = document.querySelector('#hidden-order-number');
  var val;
  var radios = document.getElementsByName('reason');

  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }

  if (val === 'problem') {
    orderNumber.removeAttribute('hidden');
  }
  if (val === 'question' || val === 'comment') {
    orderNumber.setAttribute('hidden', '');
  }
}

function showErrorMessage(msg) {
  var errMessage = document.querySelector('#error-msg');
  errMessage.classList.remove('hidden');
  errMessage.innerHTML = msg;
}
function checkFields() {
  var first = form['firstname'].value;
  var last = form['lastname'].value;
  var city = form['city'].value;
  var address = form['address'].value;
  var textarea = document.querySelector('#contact-message').value;

  if (
    first.length > 0 &&
    last.length > 0 &&
    city.length > 0 &&
    address.length > 0 &&
    textarea.length > 0 &&
    validatePhone() &&
    validatePostal()
  ) {
    return true;
  }
  if (first.length <= 0 || last.length <= 0) {
    showErrorMessage('Please include your first and last name');
    return false;
  }
  if (address.length <= 0) {
    showErrorMessage('Please include your address');
    return false;
  }
  if (city.length <= 0) {
    showErrorMessage('Please include the city you are from');
    return false;
  }
  if (textarea.length <= 0) {
    showErrorMessage('Please write us a short message');
    return false;
  }
  if (!validatePostal()) {
    showErrorMessage('Please provide a valid Canadian Postal Code');
    return false;
  }
  if (!validatePhone()) {
    showErrorMessage('Please provide a valid Canadian phone number');
    return false;
  }
}

function validatePostal() {
  var postal = form['postalCode'].value;
  var postalRegEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
  if (postal.toString().match(postalRegEx)) {
    return true;
  }
  return false;
}

function validatePhone() {
  var phone = form['phone'].value;
  var phoneRegEx = /^(\(\d{3}\)[.-]|(\d{3}[.-]?)){2}\d{4}$/;
  if (phone.toString().match(phoneRegEx)) {
    console.log(phone.match(phoneRegEx));
    return true;
  }
  return false;
}
function numOrder() {
  var problem = document.querySelector('#problem-radio');
  var orderNumber = document.querySelector('#hidden-order-num');
  if (problem.checked === true) {
    if (orderNumber.value > 0) {
      return true;
    }
    showErrorMessage('Please provide an Order Number');
    return false;
  }
  return true;
}
form.onsubmit = function() {
  if (checkFields() && numOrder()) {
    return true;
  }
  return false;
};
