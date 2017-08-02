import React from 'react';
import noDie from '../../svg/no_die.svg';
import oneDie from '../../svg/one_die.svg';
import twoDie from '../../svg/two_die.svg';

function Die(props){

    let svgSrc;

    switch(props.value){
        case 1:
            svgSrc = oneDie;
        break;
        case 2:
            svgSrc = twoDie;
        break;
        default: 
            svgSrc = noDie;
    }



    return (
        <div className="die-container">
            <img src={svgSrc} alt={props.value} onClick={props.onClick}/>
        </div>
    );
}

export default Die;