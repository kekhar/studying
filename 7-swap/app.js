"use strict";
function swapKeysAndValues(obj) {
    const swappedObj = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'number') {
            swappedObj[value] = key;
        }
    }
    return swappedObj;
}
// Пример использования:
const obj = {
    a: 1,
    b: 2
};
const res = swapKeysAndValues(obj);
console.log(res); // { '1': 'a', '2': 'b' }
