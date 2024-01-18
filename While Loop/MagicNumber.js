// 2.Find the Magic Number
//a. Ask the user to think of a number n between 1 to 100
//b. Then check with the user if the number is less then n/2 or greater
//c. Repeat till the Magic Number is reached..

// Function to find the Magic Number
const findMagicNumber = () => {
    let lowerBound = 1;
    let upperBound = 100;
    let isMagicNumberFound = false;

    console.log("Think of a number between 1 and 100.");

    while (!isMagicNumberFound) {
        const midpoint = Math.floor((lowerBound + upperBound) / 2);
        const userInput = prompt(`Is your number less than (${midpoint}), equal to (=), or greater than (> ${midpoint})?`);
        if (userInput === "<") {
            upperBound = midpoint - 1;
        } else if (userInput === "=") {
            console.log(`Congratulations! Your magic number is ${midpoint}.`);
            isMagicNumberFound = true;
        } else if (userInput === ">") {
            lowerBound = midpoint + 1;
        } else {
            console.log("Invalid input. Please enter '<', '=', or '>'.");
        }
    }
};

findMagicNumber();


