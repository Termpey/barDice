import React from 'react';

function Score(props) {

    let start = (props.dice);
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    let number = 0;
    let score = '';
    let bestSofar = 0;

    if(start.indexOf(1) >= 0){
        for(var y = 0; y <= 4; y++){
            if(start[y] === 1){
                one++
            }else if(start[y] === 2){
                two++
            }else if(start[y] === 3){
                three++
            }else if(start[y] === 4){
                four++
            }else if(start[y] === 5){
                five++
            }else if(start[y] === 6){
                six++
            }
        }
    }else{
        score = String( 'Score: ' + 0)
        return(
        <div className="scoreCalculator">
            <text>{score}</text>
        </div>
        );
    }

    bestSofar = two;
    number = 2

    if(three >= bestSofar){
        bestSofar = three
        number = 3
    }
    if(four >= bestSofar){
        bestSofar = four
        number = 4
    }
    if(five >= bestSofar){
        bestSofar = five
        number = 5
    }
    if(six >= bestSofar){
        bestSofar = six
        number = 6
    }

    score = String( 'Score: ' + (((bestSofar + one) * 10) + number))

    return(
        <div className="scoreCalculator">
            <text>{score}</text>
        </div>
    );
}

export default Score;