'use strict';

class Billing {
  constructor(amount) {
    this.amount = amount;
  }
}

class FixBilling extends Billing {
  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, items) {
    super(amount);
    this.items = items;
  }

  calculateTotal() {
    return this.amount * this.items;
  }
}

const fixBill = new FixBilling(100);
console.log(`Фиксированная сумма выставления счетов: ${fixBill.calculateTotal()}`);

const hourBill = new HourBilling(50, 3);
console.log(`Общая сумма выставления счета за час: ${hourBill.calculateTotal()}`);
const itemBill = new ItemBilling(10, 5);
console.log(`Общая сумма выставления счета за товар: ${itemBill.calculateTotal()}`);
