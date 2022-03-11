class Monster {
    constructor(name, health, damage, model){
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.model = model;
    }
}

class MonsterLibrary{
    static library = {
        dragon: new Monster("Dragon", 100, 10, "#dragon"),
        dragon2: new Monster("Dragon2", 200, 10, "#dragon"),
        penguin: new Monster("Penguin", 100, 10, "#penguin"),
        golem: new Monster("Golem", 100, 10, "#golem"),
        humanoid: new Monster("Humanoid", 100, 10, "#humanoid")
    }

    static getMonsterDetails(id) {
        return this.library[id];
    }

    static getMonsterIds(){
        return Object.keys(this.library);
    }
}