function rollDice(dice) {
  const validTypes = [`d4`, `d6`, `d8`, `d10`, `d12`, `d16`, `d20`];

  if (!validTypes.includes(dice)) {
    console.log(`Недопустимый тип кубика. Доступные типы: ${validTypes.join(', ')}`);
    return;
  }

  const min = 1;
  const max = parseInt(dice.slice(1));

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

// Пример использования:
const result = rollDice(`d10`);
console.log(`Результат броска: ${result}`);