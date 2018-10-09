$(document).ready(function () {

  $('.btn').click(function (e) {
    $('#input').val($('.input').val() + $(this).val());
  });

  $('#all-clear').click(function (e) {
    $('#input').val('');
  });

  $('#clear').click(function (e) {
    var el = $("#input");
    var the_value = el.val();
    the_value = the_value.substring(0, the_value.length - 1);
    el.val(the_value);
  });

  $('.equals').click(function (e) {
    $('#input').val(eval($('#input').val()));
  });

  $('.percentage').click(function (e) {
    $('#input').val(eval($('#input').val() / 100));
  });

  $('.sign').click(function (e) {
    $('#input').val(eval($('#input').val() * (-1)));
  });

  $('.btn-pi').click(function (e) {
    $('#input').val(eval($('#input').val() * (3.14159)));
  });

  $('.square-root').click(function (e) {
    $('#input').val(SquareRoot($('#input').val()));
  });

  $('.factorial').click(function (e) {
    $('#input').val(GetFactorial($('#input').val()));
  });

  $('.exponential').click(function (e) {
    $('#input').val(CalcExponential($('#input').val()));
  });

  $('.log').click(function (e) {
    $('#input').val(CalculateLog($('#input').val()));
  });

  $('.sin').click(function (e) {
    $('#input').val(CalculateSin($('#input').val()));
  });

  $('.cos').click(function (e) {
    $('#input').val(CalculateCos($('#input').val()));
  });

  $('.tan').click(function (e) {
    $('#input').val(CalculateTan($('#input').val()));
  });
});

function GetFactorial(value) {
  tempvalue = 1;
  for (i = value; i > 0; i--) {
    tempvalue *= i;
  }
  return tempvalue
}

function CalculateLog(value) {
  return Math.log(value)
}

function CalculateSin(value) {
  return Math.sin(value)
}

function CalculateCos(value) {
  return Math.cos(value)
}

function CalculateTan(value) {
  return Math.tan(value)
}

function CalcExponential(value) {
  return Math.exp(value)
}

function SquareRoot(value) {
  return Math.sqrt(value)
}
