import React, { Component } from 'react';
import Die from './components/atom/Die.js';
import Score from './components/atom/Score.js';

class App extends Component {

    constructor() {
        super();

        this.state = {
            diceValues: [1, 2, 3, 4, 5]
        }

        this.roll = this.roll.bind(this);
    }

    roll() {
        let diceValues = [];
        let low = 1;
        let high = 6;
        for (var y = 0; y < 5; y++) {
            let dieValue = Math.floor((Math.random() * (high + 1 - low))) + low;
            diceValues.push(dieValue)
        }

        this.setState({
            diceValues: diceValues
        });
    }

    render() {

        let dice1Value = this.state.diceValues[0]
        let dice2Value = this.state.diceValues[1]
        let dice3Value = this.state.diceValues[2]
        let dice4Value = this.state.diceValues[3]
        let dice5Value = this.state.diceValues[4]

        let dice1 = <Die key={1} value={dice1Value}></Die>
        let dice2 = <Die key={2} value={dice2Value}></Die>
        let dice3 = <Die key={3} value={dice3Value}></Die>
        let dice4 = <Die key={4} value={dice4Value}></Die>
        let dice5 = <Die key={5} value={dice5Value}></Die>

        let score = <Score dice= {this.state.diceValues}></Score>

        return <div>
            <button onClick={this.roll}>Roll</button>

            <table>
                <tr>
                    <th colspan="2" align="left">Rolled Hand</th>
                    <th colspan="2" align="right">{score}</th>
                </tr>

                <tr>
                    <td>{dice1}</td>
                    <td>{dice2}</td>
                    <td>{dice3}</td>
                    <td>{dice4}</td>
                    <td>{dice5}</td>
                </tr>
            </table>
        </div>;
    }
}

export default App;