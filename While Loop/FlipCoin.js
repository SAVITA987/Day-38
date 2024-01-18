// 3.Extend the Flip Coin problem till either Heads or Tails wins 11 times.

const flipCoin = () => {
    return Math.floor(Math.random() * 2) === 0 ? 'Heads' : 'Tails';
};

const determineWinner = () => {
    let headsCount = 0;
    let tailsCount = 0;

    while (headsCount < 11 && tailsCount < 11) {
        const result = flipCoin();
        console.log(result);

        if (result === 'Heads') {
            headsCount++;
        } else {
            tailsCount++;
        }
    }

    if (headsCount === 11) {
        console.log('Heads wins!');
    } else {
        console.log('Tails wins!');
    }
};

determineWinner();

//------Output------//
/*
Tails
Tails
Tails
Tails
Tails
Heads
Tails
Heads
Heads
Tails
Heads
Heads
Tails
Heads
Heads
Tails
Heads
Heads
Heads
Tails
Heads
Heads wins!
*/