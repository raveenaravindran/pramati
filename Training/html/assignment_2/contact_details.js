//Submit function
function contact_details() {
  var f_name = document.getElementById("fname").value;
  var l_name = document.getElementById("lname").value;
  var email_id = document.getElementById("email").value;
  var dob = document.getElementById("date").value;
  var phone = document.getElementById("phone").value;

  var table = document.getElementById("contact_info");

  if (user = contact_form.fname.value == "") {
    document.getElementById("fname_error").innerHTML = "First name cannot be blank";
  }
  if (user = contact_form.lname.value == "") {
    document.getElementById("lname_error").innerHTML = "Last name cannot be blank";
  }
  if (user = contact_form.email.value == "") {
    document.getElementById("email_error").innerHTML = "Email cannot be blank";
  }
  if (user = contact_form.date.value == "") {
    document.getElementById("dob_error").innerHTML = "DOB cannot be blank";
  }
  if (user = contact_form.phone.value == "") {
    document.getElementById("phone_error").innerHTML = "Phone number cannot be blank";
  }

  if (f_name && l_name && email_id && dob && phone) {
    flag = 0;
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    if (f_name[0] == f_name[0].toUpperCase()) {
      cell1.innerHTML = f_name;
      flag = 1;
    } else {
      f_ltr = f_name.charAt(0).toUpperCase()
      remaining = f_name.slice(1);
      f_name = f_ltr + remaining;
      cell1.innerHTML = f_name;
      flag = 1;
    }

    if (l_name[0] == l_name[0].toUpperCase()) {
      cell2.innerHTML = l_name;
      flag = 1;
    } else {
      f_ltr = l_name.charAt(0).toUpperCase()
      remaining = l_name.slice(1);
      l_name = f_ltr + remaining;
      cell2.innerHTML = l_name;
      flag = 1;
    }

    if (validate_email(email_id)) {
      cell3.innerHTML = email_id;
      flag = 1;
    } else {
      document.getElementById("email_error").innerHTML = "Invalid Email format";
      flag = 0;
    }
    cell4.innerHTML = dob;
    if (validate_phone(phone)) {
      cell5.innerHTML = phone;
      flag = 1;
    } else {
      document.getElementById("phone_error").innerHTML = "Invalid format";
      flag = 0;
    }
    if (flag == 1) {
      document.getElementById("contact_form").reset();
    } else {
      flag = 0;
    }
  }
}

// Function to capitalise first letter
function capitalize_name(textboxid, str) {
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
function validate_email(email_id) {
  var pattern = new RegExp(/^([a-zA-Z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  return pattern.test(email_id);
}

//Phone number validation
function validate_phone(phone) {

  var ph_pattern = new RegExp(/^([6-9]+[\d]{9})?$/);
  return ph_pattern.test(phone);
}

// onchange functions
function onchange_fname() {
  document.getElementById("fname_error").innerHTML = " ";
}

function onchange_lname() {
  document.getElementById("lname_error").innerHTML = " ";
}

function onchange_email() {
  document.getElementById("email_error").innerHTML = " ";
}

function onchange_dob() {
  document.getElementById("dob_error").innerHTML = " ";
}

function onchange_phone() {
  document.getElementById("phone_error").innerHTML = " ";
}
