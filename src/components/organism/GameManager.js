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
        return new Promise(function(resolve, reject){
            fetch('http://localhost:8080/reset', {
                credentials: 'include'
            }).then(function(response){
                console.log(response.body);
                return response.json();
            }).then(function(json){
                resolve(json);
            }).catch(function(err){
                reject(err);
            });
        });
    }

    hold(data) {

        return new Promise(function(resolve, reject){
            fetch('http://localhost:8080/hold' + data, {
                credentials: 'include'
            }).then(function(response){
                console.log(response.body);
                return response.json();
            }).then(function(json){
                resolve(json);
            }).catch(function(err){
                reject(err);
            });
        });
        
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