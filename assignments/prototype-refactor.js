/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attr) {
        this.createdAt = attr.createdAt;
        this.name = attr.name;
        this.dimensions = attr.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}


/*      Character      */
class CharacterStats extends GameObject {
    constructor(charAttr) {
        super(charAttr);
        this.healthPoints = charAttr.healthPoints;
    }
    takeDamage(i) {
        this.healthPoints = this.healthPoints - i;
        if (this.healthPoints > 0) {
            return `${this.name} took ${i} damage.\nHealth Points: ${this.healthPoints}`;
        } else if (this.healthPoints <= 0) {
            return this.destroy();
        }
    }
}


/*      Humans      */
class Humanoid extends CharacterStats {
    constructor(humanAttr) {
        super(humanAttr);
        this.team = humanAttr.team;
        this.weapons = humanAttr.weapons;
        this.language = humanAttr.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}



/*      Hero      */

class Hero extends Humanoid {
    constructor(heroAttr) {
        super(heroAttr);
        this.armor = heroAttr.armor;
    }
    dealDamage(target) {
        let i = Math.floor(Math.random() * 3);
        return target.takeDamage(i);
    }
}


/*      Villain     */

class Villain extends Humanoid {
    constructor(villainAttr) {
        super(villainAttr);
        this.magic = villainAttr.magic;
    }
}


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