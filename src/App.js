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

            rolls: 0
        }

        this.roll = this.roll.bind(this);
        this.hold = this.hold.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        let diceValues = [
            {value: 5, held: false},
            {value: 5, held: false},
            {value: 5, held: false},
            {value: 5, held: false},
            {value: 5, held: false},
        ]
        let score = []
        let rolls = 0
       
        this.setState({
            diceValues: diceValues,
            score: score,
            rolls: rolls
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

        return <div>
            <button onClick={this.roll}>Roll</button>
            <button onClick={this.reset}>Reset</button>

            <table>
                <tr>
                    <th colspan="2" align="left">Rolled Hand</th>
                    <th colspan="2" align="right"><Score dice = {this.state.score} rolls = {this.state.rolls}/></th>
                </tr>

                <tr>
                    {diceRoll}
                </tr>

                <tr>
                    <th>Hand</th>
                </tr>

                <tr>
                    {diceHold}
                </tr>
            </table>
        </div>;
    }
}

export default App;