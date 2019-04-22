/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
function GameObject(attr) {
    this.createdAt = attr.createdAt;
    this.name = attr.name;
    this.dimensions = attr.dimensions;
}

GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`;
}
/*      Character      */
function CharacterStats(charAttr) {
    GameObject.call(this, charAttr);
    this.healthPoints = charAttr.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function (i) {
    this.healthPoints = this.healthPoints - i;
    if (this.healthPoints > 0) {
        return `${this.name} took ${i} damage.\nHealth Points: ${this.healthPoints}`;
    } else if (this.healthPoints <= 0) {
        return this.destroy();
    }
}
/*      Humans      */
function Humanoid(humanAttr) {
    CharacterStats.call(this, humanAttr);
    this.team = humanAttr.team;
    this.weapons = humanAttr.weapons;
    this.language = humanAttr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}`;
}

/*      Hero      */

function Hero(heroAttr) {
    Humanoid.call(this, heroAttr);
    this.armor = heroAttr.armor;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.dealDamage = function (target) {
    let i = Math.floor(Math.random() * 3);
    return target.takeDamage(i);
}

/*      Villain     */

function Villain(villainAttr) {
    Hero.call(this, villainAttr);
    this.magic = villainAttr.magic;
}

Villain.prototype = Object.create(Hero.prototype);


/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const mainHero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 3,
        height: 4,
    },
    healthPoints: 20,
    name: 'Thor',
    team: 'Odin',
    weapons: [
        'StormBreaker',
        'Lightning',
    ],
    language: 'God',
    armor: 5,
});

const mainVillain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 3,
        height: 4,
    },
    healthPoints: 20,
    name: 'Loki',
    team: 'Odin',
    weapons: [
        'Dagger',
        'Magic',
    ],
    language: 'God',
    armor: 3,
    magic: 15,
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage(1)); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(mainHero);
console.log(mainHero.dealDamage(mainVillain));
console.log(mainVillain);
console.log(mainHero.name);
console.log(mainVillain.name);