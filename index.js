// var metric = document.getElementById("metric");
// var inch = document.getElementById("in").value;
// var foot = document.getElementById("ft").value;

function change() {
  var choice = document.getElementById("choose").value;
  if (choice == "in") {
    document.getElementById("paperWidth").innerHTML = "Paper Width (in)";
    document.getElementById("36").innerHTML = "36";
    document.getElementById("42").innerHTML = "42";
    document.getElementById("36").value = "36";
    document.getElementById("42").value = "42";
  } else if (choice == "ft") {
    document.getElementById("paperWidth").innerHTML = "Paper Width (ft)";
    document.getElementById("36").innerHTML = "3";
    document.getElementById("42").innerHTML = "3.5";
    document.getElementById("36").value = "3";
    document.getElementById("42").value = "3.5";
  }
}

function changeToFeet() {
  document.getElementById("paperWidth").innerHTML = "Paper Width (ft)";
  document.getElementById("36").innerHTML = "3";
  document.getElementById("42").innerHTML = "3.5";
  document.getElementById("36").value = "3";
  document.getElementById("42").value = "3.5";
}

function conversion(len1, wid1, len2) {
  // let len1 = document.forms["convert"]["len1"].value;
  // let wid1 = document.forms["convert"]["wid1"].value;
  // let len2 = document.forms["convert"]["len2"].value;
  // let wid2 = document.forms["convert"]["wid2"].value;

  // var tdElement = document.getElementById('__TABLE__');
  // var trElement = tdElement.parentNode;
  // trElement.removeChild(tdElement);
  // trElement.innerHTML = str + trElement.innerHTML;

  var wid2 = (len2*wid1)/len1;

  document.getElementById('len1').value = len1;
  document.getElementById('len2').value = len2;
  document.getElementById('wid1').value = wid1;
  document.getElementById('wid2').value = wid2.toFixed(2);

  // return document.getElementById(wid2).innerHTML;
}

var form = document.getElementById("convert");

function handleForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', handleForm);