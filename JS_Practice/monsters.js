class Monster {
    constructor(name, health, damage){
        this.name = name;
        this.health = health;
        this.damage = damage;
    }
}

class MonsterLibrary{
    static library = {
        dragon: new Monster("Dragon", 100, 10),
        dragon2: new Monster("Dragon2", 200, 30)
    }

    static getMonsterDetails(id) {
        return this.library[id];
    }
}