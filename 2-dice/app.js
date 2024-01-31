function rollDice(dice) {
  const types = [`d4`, `d6`, `d8`, `d10`, `d12`, `d16`, `d20`];

  if (!types.includes(dice)) {
    console.log(`Недопустимый тип кубика. Доступные типы: d4, d6, d8, d10, d12, d16, d20`);
    return;
  }

  const min = 1;
  let max;

  switch (dice) {
    case 'd4':
      max = 4;
      break;
    case 'd6':
      max = 6;
      break;
    case 'd8':
      max = 8;
      break;
    case 'd10':
      max = 10;
      break;
    case 'd12':
      max = 12;
      break;
    case 'd16':
      max = 16;
      break;
    case 'd20':
      max = 20;
      break;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

// Пример использования:
const result = rollDice(`d20`);
console.log(`Результат броска: ${result}`);
