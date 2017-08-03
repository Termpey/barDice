import React, {Component} from 'react';
import Die from './components/atom/Die.js';

class App extends Component {

    constructor(){
        super();

        this.state = {
            diceValues: [1, 2, 3, 4, 5]
        }

        this.roll = this.roll.bind(this);   
    }

    roll(){
        let diceValues = this.state.diceValues.slice(0);
        let low = 1;
        let high = 6;
        for(var y = 0; y < 5; y++){
            let dieValue = Math.floor((Math.random() * (high + 1 - low))) + low;
            diceValues[y] = dieValue;
        }

        this.setState({
            diceValues: diceValues
        });
    }

    render(){

        let dice = this.state.diceValues.map((value, index) => {
            return <Die key={index} value={value}></Die>
        });

        return <div>
            <button onClick={this.roll}>Roll</button>
            
            {dice}
        </div>;
    }
}

export default App;