$(document).ready(function () {
  result = []
  $('#btn-all-clear').on('click', function () {
    result.splice(0);
    $('#input').empty();
  });

  $('#btn-clear').on('click', function () {
    result.pop(0);
    $('#input').html(result);
  });

  $('#btn-one').on('click', function () {
    result.push(1);
    $('#input').html(result);
  });

  $('#btn-two').on('click', function () {
    result.push(2);
    $('#input').html(result);
  });

  $('#btn-three').on('click', function () {
    result.push(3);
    $('#input').html(result);
  });

  $('#btn-four').on('click', function () {
    result.push(4);
    $('#input').html(result);
  });
  $('#btn-five').on('click', function () {
    result.push(5);
    $('#input').html(result);
  });

  $('#btn-six').on('click', function () {
    result.push(6);
    $('#input').html(result);
  });

  $('#btn-seven').on('click', function () {
    result.push(7);
    $('#input').html(result);
  });

  $('#btn-eight').on('click', function () {
    result.push(8);
    $('#input').html(result);
  });

  $('#btn-nine').on('click', function () {
    result.push(9);
    $('#input').html(result);
  });

  $('#btn-zero').on('click', function () {
    result.push(0);
    $('#input').html(result);
  });

  $('#btn-decimal').on('click', function () {
    result.push('.');
    $('#input').html(result);
  });

  $('#btn-add').on('click', function () {
    result.push('+');
    $('#input').html(result);
  });

  $('#btn-diff').on('click', function () {
    result.push('-');
    $('#input').html(result);
  });

  $('#btn-multiply').on('click', function () {
    result.push('x');
    $('#input').html(result);
  });

  $('#btn-div').on('click', function () {
    result.push('÷');
    $('#input').html(result);
  });

  $('#btn-sqr-root').on('click', function () {
    result.push('√');
    $('#input').html(result);
  });

  $('#btn-log').on('click', function () {
    result.push('√log(');
    $('#input').html(result);
  });

  $('#btn-pi').on('click', function () {
    result.push('π');
    $('#input').html(result);
  });

  $('#btn-factorial').on('click', function () {
    result.push('!');
    $('#input').html(result);
  });

  $('#btn-open-brac').on('click', function () {
    result.push('(');
    $('#input').html(result);
  });

  $('#btn-close-brac').on('click', function () {
    result.push(')');
    $('#input').html(result);
  });

  $('#btn-sin').on('click', function () {
    result.push('sin(');
    $('#input').html(result);
  });

  $('#btn-cos').on('click', function () {
    result.push('cos(');
    $('#input').html(result);
  });

  $('#btn-tan').on('click', function () {
    result.push('tan(');
    $('#input').html(result);
  });

  //do calculation with equal sign
  $('#btn-equal').on('click', function () {

    result.forEach(function (element, index, array) {
      if (isNaN(parseInt(element)) && element != ".") {
        // alert('index',index,element);
        d = result.splice(0, index).join("");
        // alert(d);
        e = result.splice(1).join("");

        if (element == "+") {
          f = parseFloat(d) + parseFloat(e);
        }

        if (element == "-") {
          f = parseFloat(d) - parseFloat(e);
        }

        if (element == "x") {
          f = parseFloat(d) * parseFloat(e);
        }

        if (element == "/") {
          f = parseFloat(d) / parseFloat(e);
        }

        if (element == "√") {

          f = Math.sqrt(parseFloat(e, 10)).toString(10);
        }

        if (element == "/") {
          f = parseFloat(d) / parseFloat(e);
        }

        if (element == "/") {
          f = parseFloat(d) / parseFloat(e);
        }

        $('#input').html(f);
        result.splice(0);

      }
    });
  });

});

//do calculation and show result with mathematical operators  && isNaN(parseInt(result[result.length-1]))
function calculation() {

  result.forEach(function (element, index, array) {
    //check if 2 cal sign exist in the array
    alert(element, index, array);
    if (isNaN(parseInt(element)) && element != "." && index != result.length - 1) {

      alert('hiiiiii');
      d = result.splice(0, index).join("");
      e = result.splice(1, index).join("");

      if (element == "+") {
        f = parseFloat(d) + parseFloat(e);
        alert(e);
      }

      if (element == "-") {
        f = parseFloat(d) - parseFloat(e);
      }

      if (element == "x") {
        f = parseFloat(d) * parseFloat(e);
      }

      if (element == "/") {
        f = parseFloat(d) / parseFloat(e);
      }

      result[0] = f;

      $('#input').html(f);

    }
  });

}

//to check if anything exists in result, and if anything exists in f
function empty() {
  if (parseFloat(f) != 0 && result.length == 0) {
    result[0] = f;
  }
}

//click on calc signs and process calculation
$('#btn-add').on('click', function () {
  empty();
  // result.push('+');
  $('#input').html(result);
  calculation();
});

$('#btn-diff').on('click', function () {
  empty();
  result.push('-');
  $('#input').html(result);
  calculation();
});

$('#btn-div').on('click', function () {
  empty();
  result.push('/');
  $('#input').html(result);
  calculation();
});

$('#btn-multiply').on('click', function () {
  empty();
  result.push('x');
  $('#input').html(result);
  calculation();
});