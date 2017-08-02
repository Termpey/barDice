import React, {Component} from 'react';
import Die from './components/atom/Die.js';

class App extends Component {

    constructor(){
        super();

        this.state = {
            text: 'meowsers',
            diceValues: []
        }

        this.roll = this.roll.bind(this);   
        this.textChanged = this.textChanged.bind(this);
        this.addDie = this.addDie.bind(this);
    }

    textChanged(event){
        this.setState({
            text: event.target.value
        });
    }

    addDie(){
        let newDiceValues = this.state.diceValues.slice(0);

        newDiceValues.push(0);

        this.setState({
            diceValues: newDiceValues
        });
    }

    roll(index){
        let diceValues = this.state.diceValues.slice(0);

        let low = 1;
        let high = 6;
        let dieValue = Math.floor((Math.random() * (high + 1 - low))) + low;

        diceValues[index] = dieValue;

        this.setState({
            diceValues: diceValues
        });
    }

    render(){

        let dice = this.state.diceValues.map((value, index) => {
            return <Die key={index} value={value} onClick={this.roll.bind(this, index)}></Die>
        });

        let values = this.state.diceValues.map((value, index) => {
            return <span key={index}>{value}</span>
        });

        return <div>
            <button onClick={this.addDie}>Add Die</button>
            <input type="text" value={this.state.text} onChange={this.textChanged}/>
            {values}
            {dice}
        </div>;
    }
}

export default App;