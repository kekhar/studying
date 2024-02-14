const inputArray = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' }
];

console.log(inputArray.reduce((acc, obj) => {
  acc[obj.id] = obj;
  return acc;
}, {})); 