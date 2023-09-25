"use strict";

class Repair {
  constructor(plosh, price) {
    this.plosh = plosh;
    this.price = price;
  }
  get repSum() {
    return this.plosh * this.price;
  }
}

const plosh = 100;
const price = 500;
const repair = new Repair(plosh, price);

const repairSum = repair.repSum;

console.log(`Ціна за ремонт ${repairSum} грн`);
