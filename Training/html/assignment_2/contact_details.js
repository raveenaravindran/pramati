
$(document).ready(function () {

  $("#fname").keyup(function () {
    $('#fname').css('textTransform', 'capitalize');
  });
  $("#lname").keyup(function () {
    $('#lname').css('textTransform', 'capitalize');
  });

  $('#contact_form1').validate({
    rules: {
      fname: 'required',
      lname: 'required',
      date: 'required',
      phone: 'required',
      email: 'required',
    },
    messages: {
      fname: 'This field cannot be blank',
      lname: 'This field cannot be blank',
      date: 'This field cannot be blank',
      phone: 'This field cannot be blank',
      email: 'This field cannot be blank'
    }
  });

  var date_input = $('input[name="date"]');
  var today = new Date();
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  date_input.datepicker({
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
    endDate: today,
  });


  $("#email").blur(function () {
    var email = $("#email").val();
    if (!validateEmail(email)) {
      $("#email").after('Please enter the valid email');
    }

  });

  $("#phone").blur(function () {
    var phone = $(this).val();
    if (!validatePhone(phone)) {
      $("#phone").after('Please enter the valid phone number');
    }
  });
});

function submitValues() {
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var dob = $("#date").val();

  if (fname && lname && email && dob) {
    var table_content = "<tr><td>" + capitalizeLetter(fname) + "</td><td>" + capitalizeLetter(lname) + "</td><td>" + email + "</td><td>" + dob + "</td><td>" + phone + "</td></tr>";
    $("#contact_info").append(table_content);
  }
  document.getElementById("contact_form").reset();
}

function capitalizeLetter(name) {
  str = name.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  str = str.join(" ");
  return str
}

//Datepicker function
function validateEmail(email_id) {
  var pattern = new RegExp(/^([a-zA-Z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  return pattern.test(email_id);
}

//Phone number validation
function validatePhone(phone) {
  var ph_pattern = new RegExp(/^([6-9]+[\d]{9})?$/);
  return ph_pattern.test(phone);
}


