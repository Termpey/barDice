import React, { Component } from 'react';
import Die from './components/molecule/Die.js';
import GM from './components/organism/GameManager.js';

class App extends Component {

    constructor() {
        super();
        this.GM = new GM();

        this.state = {};
        this.serverState = undefined;
        this.actionHandler = this.actionHandler.bind(this);

        this.fetchServerState.bind(this)();
    }

    fetchServerState(){
        let localThis = this;
        fetch('http://localhost:8080/', {
            credentials: 'include'
        }).then(function(response){
            return response.json();
        }).then(function(json){
            localThis.setState(json);
        });
    }

    actionHandler(action, data) {
        let localThis = this;
        this.GM[action](data).then(function(newState){
            localThis.setState(newState);
        });
    }

    render() {
        let localThis = this;
        let diceRoll = this.state.dice ? this.state.dice.map(function (obj, index) {
            if (obj.held === false) {
                return <div className='column' key={index}>
                    <Die value={obj.value} doesHelp={obj.doesHelp} onClick={localThis.actionHandler.bind(localThis, 'hold', index)} />
                </div>;
            } else {
                return <div className='column' key={index}/>
            }
        }) : undefined;

        let diceHold = this.state.dice ? this.state.dice.map(function (obj, index) {
            if (obj.held === true) {
                return <div className='column' key={index}>
                    <Die  value={obj.value} doesHelp={obj.doesHelp} onClick={localThis.actionHandler.bind(localThis, 'hold', index)} />
                </div>;
            } else {
                return <div className='column' key={index}/>
            }
        }) : undefined;


        return <div className="container">
            <div className="columns is-desktop">
                <div className="column is-1 is-offset-1">
                    <button className="button is-warning" onClick={this.actionHandler.bind(this, 'reset')}>
                        Reset
                    </button>
                </div>
                <div className="column is-2 is-offset-3">
                    <button className="button is-success is-centered" onClick={this.actionHandler.bind(this, 'roll')}>
                        Roll
                    </button>
                </div>
                <div className="column is-2 is-offset-2">
                    {this.state.score}
                </div>
            </div>
            <div className="columns is-desktop">
                {diceRoll}
            </div>
            <div className="section">
                <div className="columns is-desktop">
                    <div className="column is-1 is-offset-5">
                        Hand
                    </div>
                </div>
                <div className="columns is-desktop">
                    {diceHold}
                </div>
            </div>
            {JSON.stringify(this.state, null, 4)}
        </div>;
    }
}

export default App;