const configAmountInputElement = document.getElementById("config-amount-input");
const warningElement = document.getElementById("warning");
const inputCheck = configAmountInputElement.maxlenght;
function checkInput(event) {
  const enteredText = event.target.value;
  console.log(enteredText);
  

  if (enteredText <= 0) {
    console.log("Break");
    document.getElementById("config-amount-input").value = 0;
    warningElement.id = "warning";
  } else {
    warningElement.id = "rsorder_total";
  }
}

configAmountInputElement.addEventListener("input", checkInput);

//[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]
const configAmountInputElement1 = document.getElementById(
  "config-amount-input1"
);
const warningElement1 = document.getElementById("warning1");
const inputCheck1 = configAmountInputElement1.maxlenght;
function checkInput1(event) {
  const enteredText = event.target.value;
  console.log(enteredText);

  if (enteredText <= 0) {
    console.log("Break");
    document.getElementById("config-amount-input1").value = 0;
    warningElement1.id = "warning1";
  } else {
    warningElement1.id = "rsorder_total1";
  }
}



configAmountInputElement1.addEventListener("input", checkInput1);
