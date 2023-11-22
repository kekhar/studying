// Данные
const addressLat = 10;
const addressLong = 20;
const positionLat = 15;
const positionLong = 25;

// Вычисляем разницу между координатами
const latDis = positionLat - addressLat;
const longDis = positionLong - addressLong;

// Вычисляем квадраты разностей
const latDisSquared = latDis * latDis;
const longDisSquared = longDis * longDis;

// Вычисляем квадрат гипотенузы (расстояния)
const distanceSquared = latDisSquared + longDisSquared;

// Вычисляем само расстояние
const distance = Math.sqrt(distanceSquared);

console.log(`Расстояние между точками: ${distance}`);