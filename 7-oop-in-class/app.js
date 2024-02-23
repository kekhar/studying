"use strict";

class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  talk() {
    console.log(`[${this.language}] ${this.name} говорит.`);
  }
}

class Orc extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} наносит удар с помощью ${this.weapon}.`);
  }

  talk() {
    console.log(`[${this.language}] ${this.name} говорит орочьим голосом.`);
  }
}

class Elf extends Character {
  constructor(race, name, language, spellType) {
    super(race, name, language);
    this.spellType = spellType;
  }

  castSpell() {
    console.log(`${this.name} создает заклинание типа ${this.spellType}.`);
  }

  talk() {
    console.log(`[${this.language}] ${this.name} говорит эльфийским языком.`);
  }
}

const orc = new Orc("Орк", "Гром", "Орочий", "топор");
const elf = new Elf("Эльф", "Леголас", "Эльфийский", "огонь");

orc.talk();
orc.attack();

elf.talk();
elf.castSpell();
