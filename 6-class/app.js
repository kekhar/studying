'use strict';

class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(value) {
    if (value >= 0) {
      this.#mileage = value;
    } else {
      console.log(`Пробег не может быть отрицательным`);
    }
  }

  info() {
    console.log(`Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage} км`);
  }
}

const сar1 = new Car('Toyota', 'Camry', 50000);
сar1.info();
сar1.mileage = 55000;
сar1.info();