function Score(rolls, dice) {
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    let number = 1;
    let score = '';
    let bestSofar = 0;

    if (dice.indexOf(1) >= 0) {
        for (var y = 0; y <= 4; y++) {
            if (dice[y] === 1) {
                one++
            } else if (dice[y] === 2) {
                two++
            } else if (dice[y] === 3) {
                three++
            } else if (dice[y] === 4) {
                four++
            } else if (dice[y] === 5) {
                five++
            } else if (dice[y] === 6) {
                six++
            }
        }
    } else {
        score = String('Score: 0 in ' + rolls)
        return (score);
    }

    if (two >= bestSofar){
        bestSofar = two
        number = 2
    }
    if (three >= bestSofar) {
        bestSofar = three
        number = 3
    }
    if (four >= bestSofar) {
        bestSofar = four
        number = 4
    }
    if (five >= bestSofar) {
        bestSofar = five
        number = 5
    }
    if (six >= bestSofar) {
        bestSofar = six
        number = 6
    }
    if (bestSofar === 0){
        bestSofar = 0
        number = 1
    }

    if(rolls === null){
        
    }else{
        score = String('Score: ' + (((bestSofar + one) * 10) + number) + ' in  ' + rolls)
        return (score);
    }
}

export default Score;