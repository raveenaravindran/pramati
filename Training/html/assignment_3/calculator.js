$(document).ready(function() {

  $('.btn').click(function() {
    var previousVal = $('.input').val();
    var newValue = $(this).val();
    $('#input').val(previousVal + newValue);
  });

  $('#all-clear').click(function() {
    $('#input').val('');
  });

  $('#clear').click(function() {
    var el = $("#input");
    var inputValue = el.val();
    inputValue = inputValue.substring(0, inputValue.length - 1);
    el.val(inputValue);
  });

  $('.equals').click(function() {
    var previousVal = $('.input').val();
    var newValue = $(this).val();
    $('#input').val(previousVal + newValue + eval(previousVal));
  });

  $('.percentage').click(function() {
    $('#input').val($('#input').val()/100);
  });

  $('.sign').click(function() {
    $('#input').val($('#input').val()*(-1));
  });

  $('.btn-pi').click(function() {
    $('#input').val($('#input').val()*(Math.PI));
  });

  $('.square-root').click(function() {
    $('#input').val(Math.sqrt($('#input').val()));
  });

  $('.factorial').click(function() {
    $('#input').val(GetFactorial($('#input').val()));
  });

  $('.exponential').click(function() {
    $('#input').val(Math.exp($('#input').val()));
  });

  $('.log').click(function() {
    $('#input').val(Math.log($('#input').val(),'log'));
  });

  $('.sin').click(function() {
    $('#input').val(Math.sin($('#input').val()));
  });

  $('.cos').click(function() {
    $('#input').val(Math.cos($('#input').val()));
  });

  $('.tan').click(function() {
    $('#input').val(Math.tan($('#input').val()));
  });


});

function GetFactorial(value) {
    if(value == 0) {
        return 1
    } else {
        return value * GetFactorial(value - 1);
    }
}