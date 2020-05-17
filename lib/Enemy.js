const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
    constructor(name = '') {
        super();

        this.weapon = Weapon;
        this.potion = new Potion();
    }

  getDescription() {
         return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;