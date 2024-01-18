//4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
const flipCoin = () => {
    const randomNum = Math.floor(Math.random() * 2);
    const result = (randomNum === 0) ? "Heads" : "Tails";
    return result;
};
const coinResult = flipCoin();
console.log("Coin Result: " + coinResult);

//------Output-------//

// Coin Result: Heads