function lessthanFunction() {
  document
    .getElementById("tt__premium")
    .setAttribute("value", "HCSTT13 - TRAVEL TIME LESS THAN 15 KMS");
  document.getElementById("tt__quantity").setAttribute("value", "1");

  document
    .getElementById("td__premium")
    .setAttribute("value", "TRAVEL DISTANCE ( LESS THAN 15 KMS )");
  document.getElementById("td__quantity").setAttribute("value", "1");

  div = document.getElementById("mileageconversion");
  div.style.display = "none";
}

function morethanFunction() {
  div = document.getElementById("mileageconversion");
  div.style.display = "block";
  document.getElementById("tt__quantity").setAttribute("value", "");
  document.getElementById("td__quantity").setAttribute("value", "");
  document.getElementById("tt__premium").setAttribute("value", "");
  document.getElementById("td__premium").setAttribute("value", "");
}

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let mileage = document.getElementById("km").value;
  document
    .getElementById("tt__premium")
    .setAttribute("value", "HCSTT23 - TRAVEL TIME MORE THAN 16 KMS");
  document
    .getElementById("td__premium")
    .setAttribute("value", "TRAVEL DISTANCE ( MORE THAN 16 KMS )");
  document.getElementById("td__quantity").setAttribute("value", mileage);

  // mileage conversion
  document.getElementById("tt__quantity").setAttribute("value", "");
});

// function mileageconversionFunction() {
//   document.getElementById("field2").value =
//     document.getElementById("field1").value;
// }
