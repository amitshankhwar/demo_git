// formula bmi = kg / (h /100 * h /100)

// document.getElementById("submit").addEventListener("click", getBmi);

function getBmi() {
  let cm = Number(document.getElementById("cm").value);
  let kg = Number(document.getElementById("kg").value);
  let heightInMeter = parseFloat(cm / 100);
  console.log(cm);
  let bmi = kg / (heightInMeter * heightInMeter);
  bmi = bmi.toFixed(1);

  if (cm === 0 || kg === 0) {
    alert("please enter the values!! ");
  } else {
    document.getElementById("result").innerHTML = `Your BMI is ${bmi}`;
  }
}

// function getBmi() {
//   let cm = parseInt(document.getElementById("cm").value);
//   let kg = parseFloat(document.getElementById("kg").value);
//   let bmi;
//   let newCm = parseFloat(cm / 100);
//   bmi = kg / (newCm * newCm);
//   bmi = bmi.toFixed(1);
//   document.getElementById("result").innerHTML = "Your BMI is " + bmi + "😉";
// }
