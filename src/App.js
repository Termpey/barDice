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

    hold() {

    }

    roll() {
        let diceValues = this.state.diceValues.slice();
        let scoreList = []
        let low = 1;
        let high = 6;

        for (let i in diceValues) {
            if(diceValues[i].held === false){
                diceValues[i].value = Math.floor((Math.random() * (high + 1 - low))) + low;
            }else{
                continue;
            }
            scoreList.push(diceValues[i].value)
        }

        this.setState({
            diceValues: diceValues,
            score: <Score dice= {scoreList}></Score>
        });
    }

    render() {

        let dice = this.state.diceValues.map(function(obj,index){
            
            if(obj.held === false){
                return <td onClick={this.hold}>
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