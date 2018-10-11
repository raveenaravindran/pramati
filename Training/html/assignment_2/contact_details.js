$(document).ready(function () {

  $("#date").datepicker({
    format: 'mm-dd-yyyy',
    endDate: '+0d',
    autoclose: true,
    onSelect: function () {
        $("#userForm").valid();
    }
  }).on('change', function() {
        $(this).valid();
      });

  // function sample(){
  //   alert('ok')
  // }
  // $('#date').on('change', function(){
  // 	if ($(this).val().length > 1){
  // 		$(this).rules("remove", "required");
  // 	}
  // });

  $("#first_name").keyup(function () {
    $('#first_name').css('textTransform', 'capitalize');
  });

  $("#last_name").keyup(function () {
    $('#last_name').css('textTransform', 'capitalize');
  });

  $.validator.addMethod("email", function (value, element) {
    return this.optional(element) || /^[a-zA-Z._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{1,4}$/i.test(value);
  }, "Please enter a valid email address.");


  $.validator.addMethod("phone", function (value, element) {
    return this.optional(element) || /^[6-9]{1}[0-9]{9}$/.test(value);
  }, "Please enter valid phone number.");

  $.validator.addMethod("first_name_valid", function (value, element) {
    return /^[a-zA-Z]+[a-zA-Z\' ']{0,20}$/.test(value); 
  }, "First name cannot begin with spaces");

  $.validator.addMethod("last_name_valid", function (value, element) {
    return /^[a-zA-Z]+[a-zA-Z\' ']{0,20}$/.test(value); 
  }, "First name cannot begin with spaces");




  $("#userForm").validate({
    rules: {
      first_name:{
        required : true,
        first_name_valid : true,
      } ,
      last_name:{
        required : true,
        last_name_valid : true,
      } ,
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
        date: true,
      },
    },
    messages: {
      first_name:{
       required:"This field is required.",
       first_name_valid:"Please enter valid first name.",
      },
      last_name: {
       required:"This field is required.",
       last_name_valid:"Please enter valid last name.",
      },
      email: {
        required: "This field is required.",
        email: "Please enter valid email address."
      },
      phone: {
        required: "This field is required.",
        phone: "Please enter valid phone number."
      },
      date: {
        required: "This field is required.",
        date:"Please enter valid date."
      },
    }
  });
});

function submitValues() {
  var first_name = $("#first_name").val();
  var last_name = $("#last_name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var dob = $("#date").val();

  if (first_name && last_name && email && phone && dob) {
    var table_content = "<tr><td>" + capitalizeLetter(first_name) + "</td><td>" + capitalizeLetter(last_name) + "</td><td>" + email + "</td><td>" + dob + "</td><td>" + phone + "</td></tr>";
    $("#contact_info").append(table_content);
    $("#userForm")[0].reset();
    $("#first_name").rules("remove", "required");
    $("#first_name").rules("remove", "first_name_valid");
    $("#last_name").rules("remove", "required");
    $("#last_name").rules("remove", "last_name_valid");
    $("#email").rules("remove", "required");
    $("#phone").rules("remove", "required");
    // $("#date").rules("remove", "required");

  }
}

function capitalizeLetter(name) {
  str = name.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  str = str.join(" ");
  return str
}


