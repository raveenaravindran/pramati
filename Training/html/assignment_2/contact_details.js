

$(document).ready(function () {

  $("#date").datepicker({
    format: 'mm-dd-yyyy',
    endDate: '+0d',
    autoclose: true

  });

  $("#fname").keyup(function () {
    $('#fname').css('textTransform', 'capitalize');
  });

  $("#lname").keyup(function () {
    $('#lname').css('textTransform', 'capitalize');
  });

  $.validator.addMethod("email", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,4}$/i.test(value);
  }, "Please enter a valid email address.");

  $.validator.addMethod("phone", function (value, element) {
    return this.optional(element) || /^[6-9]{1}[0-9]{9}$/.test(value);
  }, "Please enter valid phone number.");


  $("#userForm").validate({
    rules: {
      fname: "required",
      lname: "required",
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        phone: true,
      },
      date: {
        required: true,
      },

    },
    messages: {
      fname: "This field is required",
      lname: "This field is required",
      email: {
        required: "This field is required",
        email: "Please enter valid email address"
      },
      phone: {
        required: "This field is required",
        phone: "Please enter valid phone number"
      },
      date: {
        required: "This field is required"
      },
    }
  });

});


function submitValues() {
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var dob = $("#date").val();

  var table_content = "<tr><td>" + capitalizeLetter(fname) + "</td><td>" + capitalizeLetter(lname) + "</td><td>" + email + "</td><td>" + dob + "</td><td>" + phone + "</td></tr>";
  $("#contact_info").append(table_content);

  $("#userForm")[0].reset();

  $("#fname").rules("remove", "required");
  $("#lname").rules("remove", "required");
  $("#email").rules("remove", "required");
  $("#phone").rules("remove", "required");
  $("#date").rules("remove", "This field is required");

}

/*function change(){
  $("#fname").rules("remove", "required");
  $("#lname").rules("remove", "required");
  $("#email").rules("remove", "required");
	$("#phone").rules("remove", "required");
	
	
}*/

function capitalizeLetter(name) {
  str = name.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  str = str.join(" ");
  return str
}


