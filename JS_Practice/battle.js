// Possibly needed?
class BattleSystem{
    players = [];
    constructor(){

    }
    addPlayer(playerElem, monster, monMarker){
        if (this.players.length >= 2) {
            return;
        }
        this.players.push({
            elem: playerElem,
            monster: monster,
            marker: monMarker
        })
    }
}

const battleSystem = new BattleSystem();
// this.players[0]
// this.players[0].monster


// Playing around.
// function checking(){
//     const health = document.getElementById("-monster-hp");
//     console.log(health);
// }
// const healthFill = UI.getElementsByClassName("healthBarFill");