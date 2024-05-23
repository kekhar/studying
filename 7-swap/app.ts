function swapKeysAndValues(obj: Record<string, number>): Record<number, string> {
  const swappedObj: Record<number, string> = {};

  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          const value = obj[key];
          if (typeof value === 'number') {
              swappedObj[value] = key;
          }
      }
  }

  return swappedObj;
}

// Пример использования:
const obj: Record<string, number> = {
  a: 1,
  b: 2
};

const res = swapKeysAndValues(obj);
console.log(res);
