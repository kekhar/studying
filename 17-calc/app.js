document
  .getElementById("operationButtons")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      let operator = event.target.getAttribute("data-operation");
      operation(operator);
    }
  });

function operation(operator) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultElement = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Введите корректные числа";
    return;
  }

  let result;
  const mathOperations = {
    "+": (val1, val2) => val1 + val2,
    "-": (val1, val2) => val1 - val2,
    "*": (val1, val2) => val1 * val2,
    "/": (val1, val2) => (val2 !== 0 ? val1 / val2 : undefined),
  };

  if (mathOperations.hasOwnProperty(operator)) {
    let result = mathOperations[operator](num1, num2);
    if (result !== undefined) {
      resultElement.textContent = "Результат: " + result;
    } else {
      resultElement.textContent = "На ноль делить нельзя";
    }
  } else {
    resultElement.textContent = "Неверный оператор";
  }

  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
