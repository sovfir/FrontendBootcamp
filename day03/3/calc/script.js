const buttons = document.querySelectorAll("button");

const screenDisplay = document.querySelector(".screen");

let calculation = [];
let clearCalc = [];

function calculate(button) {
  const value = button.textContent;
  if (value === "C") {
    calculation = [];
    clearCalc = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    let answer = eval(clearCalc);
    screenDisplay.textContent = answer;
    clearCalc.push(answer);
  } else {
    if (clearCalc.length <= 9) {
      calculation.push(value);
      clearCalc = calculation.join("");
      screenDisplay.textContent = clearCalc;
    } else {
      screenDisplay.textContent = ".";
      calculation = [];
      clearCalc = [];
    }
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);