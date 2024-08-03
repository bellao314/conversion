// var metric = document.getElementById("metric");
// var inch = document.getElementById("in").value;
// var foot = document.getElementById("ft").value;

const sizes = [36, 42];

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

function change() {
  var choice = document.getElementById("choose").value;
  if (choice == "in") {
    document.getElementById("len1").value *= 12;
    document.getElementById("wid1").value *= 12;
    document.getElementById("len2").value *= 12;
    document.getElementById("wid2").value *= 12;
    document.getElementById("paperWidth").innerHTML = "Paper Width (in)";
    document.getElementById("36").innerHTML = "36";
    document.getElementById("42").innerHTML = "42";
    document.getElementById("36").value = "36";
    document.getElementById("42").value = "42";
  } else if (choice == "ft") {
    document.getElementById("len1").value /= 12;
    document.getElementById("wid1").value /= 12;
    document.getElementById("len2").value /= 12;
    document.getElementById("wid2").value /= 12;
    document.getElementById("paperWidth").innerHTML = "Paper Width (ft)";
    document.getElementById("36").innerHTML = "3";
    document.getElementById("42").innerHTML = "3.5";
    document.getElementById("36").value = "3";
    document.getElementById("42").value = "3.5";
  }
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}