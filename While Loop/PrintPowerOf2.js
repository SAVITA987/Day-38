// 1.Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..

const printPowersOf2 = (n) => {
    let power = 0;
    let result = 1;

    while (power <= n && result <= 256) {
        console.log(`2^${power} = ${result}`);
        power++;
        result *= 2;
    }
};
const commandLineArgument = process.argv[2];
const n = parseInt(commandLineArgument);
if (isNaN(n)) {
    console.log("Please provide a valid numeric input.");
} else {
    printPowersOf2(n);
}

//------Output------//

// Please provide a valid numeric input.