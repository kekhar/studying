'use strict';

function Character(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.talk = function () {
  console.log(`[${this.language}] ${this.name} говорит.`);
};

function Orc(race, name, language, weapon) {
  Character.call(this, race, name, language);
  
  this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.attack = function () {
  console.log(`${this.name} наносит удар с помощью ${this.weapon}.`);
};

function Elf(race, name, language, spellType) {
  Character.call(this, race, name, language);
  
  this.spellType = spellType;
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.castSpell = function () {
  console.log(`${this.name} создает заклинание типа ${this.spellType}.`);
};

const orc = new Orc('Орк', 'Гром', 'Орочий', 'топор');
const elf = new Elf('Эльф', 'Леголас', 'Эльфийский', 'огонь');

orc.talk();
orc.attack();

elf.talk();
elf.castSpell();