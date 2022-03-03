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
        dragon2: new Monster("Dragon2", 200, 30, "#dragon")
    }

    static getMonsterDetails(id) {
        return this.library[id];
    }

    static getMonsterIds(){
        return Object.keys(this.library);
    }
}