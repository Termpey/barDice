import React from 'react';
import noDie from '../../svg/no_die.svg';
import oneDie from '../../svg/one_die.svg';
import twoDie from '../../svg/two_die.svg';
import threeDie from '../../svg/three_die.svg';
import fourDie from '../../svg/four_die.svg';
import fiveDie from '../../svg/five_die.svg';
import sixDie from '../../svg/six_die.svg';

function Die(props) {

    let svgSrc;

    switch (props.value) {
        case 1:
            svgSrc = oneDie;
            break;
        case 2:
            svgSrc = twoDie;
            break;
        case 3:
            svgSrc = threeDie;
            break;
        case 4:
            svgSrc = fourDie;
            break;
        case 5:
            svgSrc = fiveDie;
            break;
        case 6:
            svgSrc = sixDie;
            break;
        default:
            svgSrc = noDie;
    }



    return (
        <div className={"image is-128x128 " + (props.doesHelp ? 'is-green' : 'is-red')}>
            <img src={svgSrc} alt={props.value} onClick={props.onClick} />
        </div>
    );

}

export default Die;