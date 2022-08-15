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

  let conversion = [
    ["15", "0.25"],
    ["16", "0.27"],
    ["17", "0.28"],
    ["18", "0.30"],
    ["19", "0.32"],
    ["20", "0.33"],
    ["21", "0.35"],
    ["22", "0.37"],
    ["23", "0.38"],
    ["24", "0.40"],
    ["25", "0.42"],
    ["26", "0.43"],
    ["27", "0.45"],
    ["28", "0.47"],
    ["29", "0.48"],
    ["30", "0.50"],
    ["31", "0.52"],
    ["32", "0.53"],
    ["33", "0.55"],
    ["34", "0.57"],
    ["35", "0.58"],
    ["36", "0.60"],
    ["37", "0.62"],
    ["38", "0.63"],
    ["39", "0.65"],
    ["40", "0.67"],
    ["41", "0.68"],
    ["42", "0.70"],
    ["43", "0.72"],
    ["44", "0.73"],

    ["45", "0.75"],
    ["46", "0.77"],
    ["47", "0.78"],
    ["48", "0.80"],
    ["49", "0.82"],
    ["50", "0.83"],
    ["51", "0.85"],
    ["52", "0.87"],
    ["53", "0.88"],
    ["54", "0.90"],
    ["55", "0.92"],
    ["56", "0.93"],
    ["57", "0.95"],
    ["58", "0.97"],
    ["59", "0.98"],
    ["60", "1.00"],
    ["61", "1.02"],
    ["62", "1.03"],
    ["63", "1.05"],
    ["64", "1.07"],
    ["65", "1.08"],
    ["66", "1.10"],
    ["67", "1.12"],
    ["68", "1.13"],
    ["69", "1.15"],
    ["70", "1.17"],
    ["71", "1.18"],
    ["72", "1.20"],
    ["73", "1.22"],
    ["74", "1.23"],

    ["75", "1.25"],
    ["76", "1.27"],
    ["77", "1.28"],
    ["78", "1.30"],
    ["79", "1.32"],
    ["80", "1.33"],
    ["81", "1.35"],
    ["82", "1.37"],
    ["83", "1.38"],
    ["84", "1.40"],
    ["85", "1.42"],
    ["86", "1.43"],
    ["87", "1.45"],
    ["88", "1.47"],
    ["89", "1.48"],
    ["90", "1.50"],
    ["91", "1.52"],
    ["92", "1.53"],
    ["93", "1.55"],
    ["94", "1.57"],
    ["95", "1.58"],
    ["96", "1.60"],
    ["97", "1.62"],
    ["98", "1.63"],
    ["99", "1.65"],
    ["100", "1.67"],
    ["101", "1.68"],
    ["102", "1.70"],
    ["103", "1.72"],
    ["104", "1.73"],

    ["105", "1.75"],
    ["106", "1.77"],
    ["107", "1.78"],
    ["108", "1.80"],
    ["109", "1.82"],
    ["110", "1.83"],
    ["111", "1.85"],
    ["112", "1.87"],
    ["113", "1.88"],
    ["114", "1.90"],
    ["115", "1.92"],
    ["116", "1.93"],
    ["117", "1.95"],
    ["118", "1.97"],
    ["119", "1.98"],
    ["120", "2.00"],
    ["121", "2.02"],
    ["122", "2.03"],
    ["123", "2.05"],
    ["124", "2.07"],
    ["125", "2.08"],
    ["126", "2.10"],
    ["127", "2.12"],
    ["128", "2.13"],
    ["129", "2.15"],
    ["130", "2.17"],
    ["131", "2.18"],
    ["132", "2.20"],
    ["133", "2.22"],
    ["134", "2.23"],

    ["135", "2.25"],
    ["136", "2.27"],
    ["137", "2.28"],
    ["138", "2.30"],
    ["139", "2.32"],
    ["140", "2.33"],
    ["141", "2.35"],
    ["142", "2.37"],
    ["143", "2.38"],
    ["144", "2.40"],
    ["145", "2.42"],
    ["146", "2.43"],
    ["147", "2.45"],
    ["148", "2.47"],
    ["149", "2.48"],
    ["150", "2.50"],
    ["151", "2.52"],
    ["152", "2.53"],
    ["153", "2.55"],
    ["154", "2.57"],
    ["155", "2.58"],
    ["156", "2.60"],
    ["157", "2.62"],
    ["158", "2.63"],
    ["159", "2.65"],
    ["160", "2.67"],
    ["161", "2.68"],
    ["162", "2.70"],
    ["163", "2.72"],
    ["164", "2.73"],

    ["165", "2.75"],
    ["166", "2.77"],
    ["167", "2.78"],
    ["168", "2.80"],
    ["169", "2.82"],
    ["170", "2.83"],
    ["171", "2.85"],
    ["172", "2.87"],
    ["173", "2.88"],
    ["174", "2.90"],
    ["175", "2.92"],
    ["176", "2.93"],
    ["177", "2.95"],
    ["178", "2.97"],
    ["179", "2.98"],
    ["180", "3.00"],
    ["181", "3.02"],
    ["182", "3.03"],
    ["183", "3.05"],
    ["184", "3.07"],
    ["185", "3.08"],
    ["186", "3.10"],
    ["187", "3.12"],
    ["188", "3.13"],
    ["189", "3.15"],
    ["190", "3.17"],
    ["191", "3.18"],
    ["192", "3.20"],
    ["193", "3.22"],
    ["194", "3.23"],
  ];

  let result;
  for (let i = 0, len = conversion.length; i < len; i++) {
    if (conversion[i][0] === mileage) {
      result = conversion[i];
      break;
    }
  }
  // mileage conversion
  document.getElementById("tt__quantity").setAttribute("value", result);
  console.log(result);
});

// function mileageconversionFunction() {
//   document.getElementById("field2").value =
//     document.getElementById("field1").value;
// }
