import React from 'react';
import ReactDOM from 'react-dom';
import ui from './index.css';


function dice() {
    return(
        <dice className={ui.dice}><x className={ui.dvalue}/>1</dice>
    );
} 

export default dice;