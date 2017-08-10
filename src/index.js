import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


function dice() {
    return (
        <App />
    );
}

ReactDOM.render(React.createElement(dice), document.getElementById('root'));