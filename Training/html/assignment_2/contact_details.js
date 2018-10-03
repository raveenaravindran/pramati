//Submit function
function contactDetails() {
  var f_name = document.getElementById("fname").value;
  var l_name = document.getElementById("lname").value;
  var email_id = document.getElementById("email").value;
  var dob = document.getElementById("date").value;
  var phone = document.getElementById("phone").value;
  var checkmail = false;
  var checkphone = false;

  var table = document.getElementById("contact_info");

  if (contact_form.fname.value == "") {
    document.getElementById("fname_error").innerHTML = "First name cannot be blank";
  }
  if (contact_form.lname.value == "") {
    document.getElementById("lname_error").innerHTML = "Last name cannot be blank";
  }
  if (contact_form.email.value == "") {
    document.getElementById("email_error").innerHTML = "Email cannot be blank";
  }
  if (contact_form.date.value == "") {
    document.getElementById("dob_error").innerHTML = "DOB cannot be blank";
  }
  if (contact_form.phone.value == "") {
    document.getElementById("phone_error").innerHTML = "Phone number cannot be blank";
  }

  if (validateEmail(email_id)) {
    checkmail = true;
  } else {
    document.getElementById("email_error").innerHTML = "Invalid Email format";
  }

  if (validatePhone(phone)) {
    checkphone = true;
  } else {
    document.getElementById("phone_error").innerHTML = "Invalid format";
  }

  if (f_name && l_name && dob && checkmail && checkphone) {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = f_name;
    cell2.innerHTML = l_name;
    cell3.innerHTML = email_id;
    cell4.innerHTML = dob;
    cell5.innerHTML = phone;
    document.getElementById("contact_form").reset();
  }
}

// Function to capitalise first letter
function capitalizeName(textboxid, str) {
  if (str && str.length >= 1) {
    var firstChar = str.charAt(0);
    var remainingStr = str.slice(1);
    str = firstChar.toUpperCase() + remainingStr;
  }
  document.getElementById(textboxid).value = str;
}

//Datepicker function
$(document).ready(function () {
  var date_input = $('input[name="date"]');
  var today = new Date();
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  date_input.datepicker({
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
    endDate: today,
  })
})

//Email validation
function validateEmail(email_id) {
  var pattern = new RegExp(/^([a-zA-Z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  return pattern.test(email_id);
}

//Phone number validation
function validatePhone(phone) {
  var ph_pattern = new RegExp(/^([6-9]+[\d]{9})?$/);
  return ph_pattern.test(phone);
}

// onchange functions
function onchangeFname() {
  document.getElementById("fname_error").innerHTML = " ";
}

function onchangeLname() {
  document.getElementById("lname_error").innerHTML = " ";
}

function onchangeEmail() {
  document.getElementById("email_error").innerHTML = " ";
}

function onchangeDate() {
  document.getElementById("dob_error").innerHTML = " ";
}

function onchangePhone() {
  document.getElementById("phone_error").innerHTML = " ";
}


