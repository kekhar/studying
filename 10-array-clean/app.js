// Фильтр
const customFilterArray = (arr, filterFunction) => {
  const result = [];

  for (const item of arr) {
    if (filterFunction(item)) {
      result.push(item);
    }
  }

  return result;
};


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Удаляем четные числа
const removeEven = (number) => number % 2 !== 0;

const filteredArray = customFilterArray(numbers, removeEven);
console.log(filteredArray);