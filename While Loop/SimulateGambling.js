// 4.Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the
//goal of Rs 200. Keeps track of number of times won and number of bets made.

const simulateGambling = () => {
    let money = 100; 
    const goal = 200; 
    const betAmount = 1; 
    let bets = 0; 
    let wins = 0; 

    while (money > 0 && money < goal) {
        bets++;
        const outcome = Math.floor(Math.random() * 2);

        if (outcome === 1) {
            money += betAmount;
            wins++;
        } else {
            money -= betAmount;
        }
    }
    console.log("Simulation Complete");
    console.log("Initial Money: Rs 100");
    console.log("Goal Amount: Rs 200");
    console.log("Number of Bets Made: " + bets);
    console.log("Number of Times Won: " + wins);
    console.log("Final Money: Rs " + money);
};
simulateGambling();

//------Output------//

/*
Simulation Complete
Initial Money: Rs 100
Goal Amount: Rs 200
Number of Bets Made: 9234
Number of Times Won: 4667
Final Money: Rs 200
*/
