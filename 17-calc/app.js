function operation(operator) {
      let num1 = parseFloat(document.getElementById('num1').value);
      let num2 = parseFloat(document.getElementById('num2').value);
      let resultElement = document.getElementById('result');

      if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Введите корректные числа';
        return;
      }

      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            resultElement.textContent = 'На ноль делить нельзя';
            return;
          }
          break;
        default:
          resultElement.textContent = 'Неверный оператор';
          return;
      }

      resultElement.textContent = 'Результат: ' + result;

      document.getElementById('num1').value = '';
      document.getElementById('num2').value = '';
    }