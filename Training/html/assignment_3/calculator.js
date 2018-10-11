$(document).ready(function() {
  // var sin_flag=0;
  // var cos_flag=0;

  $('.btn').click(function() {

    $('#input').val($('.input').val() + $(this).val());

  });

  $('#all-clear').click(function() {
    $('#input').val('');
  });

  $('#clear').click(function() {
    var el = $("#input");
    var the_value = el.val();
    the_value = the_value.substring(0, the_value.length - 1);
    el.val(the_value);
  });

  $('.equals').click(function() {
    $('#input').val($('.input').val() + $(this).val() + eval($('#input').val()));
    // if (sin_flag==1){
    //   $('#input').val('sin(' + $('#input').val()+')'+ '=' + Math.sin($('#input').val()));
    // }
    // else{
    //   sin_flag = 0;
    // }
    // if (cos_flag==1){
    //   $('#input').val('cos(' + $('#input').val()+')'+ '=' + Math.cos($('#input').val()));
    // }
    // else{
    //   cos_flag = 0;
    // }
  });

  $('.percentage').click(function() {
    $('#input').val(eval($('#input').val()/100));
  });

  $('.sign').click(function() {
    $('#input').val(eval($('#input').val()*(-1)));
  });

  $('.btn-pi').click(function() {
    $('#input').val(eval($('#input').val()*(Math.PI)));
  });

  $('.square-root').click(function() {
    $('#input').val(SquareRoot($('#input').val()));
  });

  $('.factorial').click(function() {
    $('#input').val(GetFactorial($('#input').val()));
  });

  $('.exponential').click(function() {
    $('#input').val(CalcExponential($('#input').val()));
  });

  $('.log').click(function() {
    $('#input').val(CalculateLog($('#input').val()));
  });

  $('.sin').click(function() {
    //sin_flag=1;
    $('#input').val(CalculateSin($('#input').val()));
  });

  $('.cos').click(function() {
    //cos_flag = 1;
    $('#input').val(CalculateCos($('#input').val()));
  });

  $('.tan').click(function() {
    $('#input').val(CalculateTan($('#input').val()));
  });


});

function GetFactorial(value)
 {
   tempvalue = 1;
   for ( i=value ; i>0 ;  i-- )
    {
       tempvalue *=  i ;
    }
return tempvalue
 }

function CalculateLog(value)
 {
  return Math.log(value)
 }

function CalculateSin(value)
{
  return Math.sin(value)
}

function CalculateCos(value)
{
  return Math.cos(value)
}

function CalculateTan(value)
{
  return Math.tan(value)
}

function CalcExponential(value)
{
  return Math.exp(value)
}

function SquareRoot(value)
{
  return Math.sqrt(value)
}
