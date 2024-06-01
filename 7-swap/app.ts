type InputObject = Record<string, number>;
type OutputObject = Record<number, string>;


function swapKeysAndValues(obj: InputObject): OutputObject {
  const swappedObj: OutputObject = {};

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'number') {
      swappedObj[value] = key;
    }
  }

  return swappedObj;
}

// Пример использования:
const obj: InputObject = {
  a: 1,
  b: 2
};

const res = swapKeysAndValues(obj);
console.log(res); // { '1': 'a', '2': 'b' }
