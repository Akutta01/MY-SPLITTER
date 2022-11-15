let tipAmount;
let Total;

let selectTip;

let fivePer = document.getElementById("5%").value;
let tenPer = document.getElementById("10%").value;
let fifPer = document.getElementById("15%").value;
let twentyfivePer = document.getElementById("25%").value;
let fiftyPer = document.getElementById("50%").value;

document.getElementById("5%").addEventListener("click", async () => {
  const elem = document.activeElement.id;
  // console.log(elem.id);
  if (elem === "config-amount-input") {
    document.getElementById("custom-input").focus();
  } else if (elem === "custom-input") {
    document.getElementById("config-amount-input1").focus();
  } else if (elem === "config-amount-input1") {
    await submitFunc(document.getElementById("custom-input").value);
    calc();
  }
});

function submitFunc(value) {
  selectTip = value;
  document.getElementById("custom-input").value = value;
}

async function calc() {
  let numberOfPeople = document.getElementById("config-amount-input1").value;
  let Bill = document.getElementById("config-amount-input").value;
  console.log("Bill->", Bill);
  console.log("selectTip->", selectTip);
  console.log("numberOfPeople->", numberOfPeople);

  tipAmount = (await (Bill * (selectTip / 100))) / numberOfPeople;
  Total = await (Bill / numberOfPeople + tipAmount);
  console.log(tipAmount);
  console.log(Total);
  document.getElementById("amount").innerText =
    "$" + parseFloat(tipAmount).toFixed(2);
  document.getElementById("amount1").innerText =
    "$" + parseFloat(Total).toFixed(2);
}
