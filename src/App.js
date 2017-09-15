import React, { Component } from 'react';
import Die from './components/atom/Die.js';
import Score from './components/atom/Score.js';

class App extends Component {

    constructor() {
        super();

        this.state = {
        
            diceValues: [
                {value: 5, held: false},
                {value: 5, held: false},
                {value: 5, held: false},
                {value: 5, held: false},
                {value: 5, held: false},
            ],
        
            score: [],

            rolls: 0,

            players: [
                {name: 'Player 1', score: 0, turn: true},
                {name: 'Player 2', score: 0, turn: false},
                {name: 'Player 3', score: 0, turn: false},
            ]
        }

        this.roll = this.roll.bind(this);
        this.hold = this.hold.bind(this);
        this.reset = this.reset.bind(this);
    }

    // actionHandler(action, data){
    //     let newState = GameManager[action](data);
    //     this.setState(newState);
    // }

    reset() {
        let diceValues = [
            {value: 5, held: false},
            {value: 5, held: false},
            {value: 5, held: false},
            {value: 5, held: false},
            {value: 5, held: false},
        ]
        let score = []
        
        let rolls = 0;

        let playerScores = [
            {name: 'Player 1', score: 0, turn: true},
            {name: 'Player 2', score: 0, turn: false},
            {name: 'Player 3', score: 0, turn: false},
        ];
       
        this.setState({
            diceValues: diceValues,
            score: score,
            rolls: rolls,
            playerScores: playerScores
        });
    }

    generateHoldFunction(index){
        return this.hold.bind(this, index);
    }

    hold(index) {
        
        let diceValues = this.state.diceValues.slice();
        let scoreList = []
        let count = 0

        for(let i in diceValues){
            if(diceValues[i].value === 1){
                count = count + 1
            }
        }

        if(count >= 1){
            
            diceValues[index].held = !diceValues[index].held;
            
            for(let i in diceValues){
                if(diceValues[i].held === true){
                    scoreList.push(diceValues[i].value)
                }            
            }
        }

        this.setState({
            diceValues: diceValues,
            score: scoreList
        });
    }

    roll() {
        let diceValues = this.state.diceValues.slice();
        let low = 1;
        let high = 6;
        let rolls = this.state.rolls

        if(rolls < 3){
            for (let i in diceValues) {
                if(diceValues[i].held === false){
                    diceValues[i].value = Math.floor((Math.random() * (high + 1 - low))) + low;
                }
            }

            rolls++

        }

        this.setState({
            diceValues: diceValues,
            rolls: rolls
        });
    }

    render() {
        let localThis = this;
        let diceRoll = this.state.diceValues.map(function(obj,index){
            if(obj.held === false){
                return <td>
                    <Die key={index} value={obj.value} onClick={localThis.generateHoldFunction(index)}/>
                </td>;
            }else{
                return null
            }
        });

        let diceHold = this.state.diceValues.map(function(obj,index){
            if(obj.held === true){
                return <td>
                    <Die key={index} value={obj.value} onClick={localThis.generateHoldFunction(index)}/>
                </td>;
            }else{
                return null
            }
        });

        return <div className="container">
            <div className="columns is-desktop">
                <div className="column is-1 is-offset-1">
                    <button className="button is-warning" onClick={this.reset}>
                        Reset
                    </button>
                </div>
                <div className="column is-2 is-offset-3">
                    <button className="button is-success is-centered" onClick={this.roll}>
                        Roll
                    </button>
                </div>
                <div className="column is-2 is-offset-2">
                    <Score rolls={this.state.rolls} dice={this.state.score}/>
                </div>
            </div>
            <div className="columns is-desktop">
                <div className="column is-5 is-offset-3">
                    {diceRoll}
                </div>
            </div>
            <div className="section">
                <div className="columns is-desktop">
                    <div className="column is-2 is-offset-1">
                        Highest Possible
                    </div>
                    <div className="column is-1 is-offset-2">
                        Hand
                    </div>
                </div>
                <div className="columns is-desktop">
                    <div className="column is-5 is-offset-3">
                        {diceHold}
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default App;

{/* <th colspan="2" align="left">Rolled Hand</th>
<th colspan="2" align="right"></th>
{diceRoll}
<th>Hand</th>
{diceHold} */}