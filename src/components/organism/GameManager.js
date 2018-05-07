import Score from '../molecule/Score.js';
import Doeshelp from '../atom/Doeshelp.js';

export default class GameManager {

    constructor() {

        // this.history;
        // this.game;

        this.state = this.defaultState()
    }


    defaultState() {
        return {

            diceValues: [                
                { value: 5, held: false, doesHelp: false },
                { value: 5, held: false, doesHelp: false },
                { value: 5, held: false, doesHelp: false },
                { value: 5, held: false, doesHelp: false },
                { value: 5, held: false, doesHelp: false },
            ],

            score: 'Score: 0 in 0',

            rolls: 0,

            players: [
                { name: 'Player 1', score: 0, turn: true },
                { name: 'Player 2', score: 0, turn: false },
                { name: 'Player 3', score: 0, turn: false },
            ],

            numberHeld: 0
        }
    }
    getCurrentState() {
        return clone(this.state)
    }

    reset() {
        this.state = this.defaultState()
        return clone(this.state)
    }

    hold(data) {

        let diceValues = this.state.diceValues.slice();
        let scoreList = []
        let count = 0
        let number = this.state.numberHeld

        if(number === 0 || number === diceValues[data].value || diceValues[data].value === 1){
            
            for (let i in diceValues) {
                if (diceValues[i].value === 1) {
                    count = count + 1
                }
            }
    
            if (count >= 1) {
    
                if(diceValues[data].value === 1){
                    diceValues[data].held = !diceValues[data].held;
                }else{
                    if (number.isHeld === true){
                        if(diceValues[data].value === number.value){
                            diceValues[data].held = !diceValues[data].held;
                        }
                    }else{
                        diceValues[data].held = !diceValues[data].held;
                        
                    }
                }
    
                for (let i in diceValues) {
                    if (diceValues[i].held === true) {
                        scoreList.push(diceValues[i].value)
                    }
                }
            }
        }

        this.state.score = Score(this.state.rolls, scoreList)
        this.state.diceValues = diceValues

        return clone(this.state)
    }

    roll() {
        return new Promise(function(resolve, reject){
            fetch('http://localhost:8080/roll', {
                credentials: 'include'
            }).then(function(response){
                return response.json();
            }).then(function(json){
                resolve(json);
            }).catch(function(err){
                reject(err);
            });
        });
    }
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}