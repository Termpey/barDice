import React, { Component } from 'react';
import Die from './components/atom/Die.js';
import Score from './components/atom/Score.js';

class App extends Component {

    constructor() {
        super();

        this.state = {
        
            diceValues: [
                {value: 1, held: false},
                {value: 2, held: false},
                {value: 3, held: false},
                {value: 4, held: false},
                {value: 5, held: false},
            ],
        
            score: <Score dice= {[1, 2, 3, 4, 5]}></Score>
        }

        this.roll = this.roll.bind(this);
        this.hold = this.hold.bind(this);
    }

    generateHoldFunction(index){
        return this.hold.bind(this, index);
    }

    hold(index) {
        
        let diceValues = this.state.diceValues.slice();

        diceValues[index].held = !diceValues[index].held;

        this.setState({
            diceValues: diceValues
        });
    }

    roll() {
        let diceValues = this.state.diceValues.slice();
        let scoreList = []
        let low = 1;
        let high = 6;

        for (let i in diceValues) {
            if(diceValues[i].held === false){
                diceValues[i].value = Math.floor((Math.random() * (high + 1 - low))) + low;
            }
            scoreList.push(diceValues[i].value)
        }

        this.setState({
            diceValues: diceValues,
            score: <Score dice= {scoreList} />
        });
    }

    render() {
        let localThis = this;
        let dice = this.state.diceValues.map(function(obj,index){
            if(obj.held === false){
                return <td>
                    <Die key={index} value={obj.value} onClick={localThis.generateHoldFunction(index)}/>
                </td>;
            }
            else{
                return <td onClick={localThis.generateHoldFunction(index)}>
                    <span>HELD</span>
                    <Die key={index} value={obj.value} />
                </td>;
            }
        });

        return <div>
            <button onClick={this.roll}>Roll</button>

            <table>
                <tr>
                    <th colspan="2" align="left">Rolled Hand</th>
                    <th colspan="2" align="right">{this.state.score}</th>
                </tr>

                <tr>
                    {dice}
                </tr>
            </table>
        </div>;
    }
}

export default App;