class GameManager {

    constructor(){

        this.history;
        this.game;
    }

    roll(data){
        this.history.push(clone(this.game));
        
    }

    generateState(){
        
    }
}

function clone(obj){
    return JSON.parse(JSON.stringify(obj));
}