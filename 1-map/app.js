const inputArray = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' }
];

const uniqueArray = Array.from(new Set(inputArray.map(obj => obj.id))).map(id => {
  return inputArray.find(obj => obj.id === id);
});

console.log(uniqueArray);