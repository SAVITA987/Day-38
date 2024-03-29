// 1.Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.

const printPowersOfTwo = (n) => {
    console.log("Powers of 2 up to 2^" + n + ":");

    for (let i = 0; i <= n; i++) {
        const result = Math.pow(2, i);
        console.log("2^" + i + " = " + result);
    }
};
const commandLineArgument = process.argv[2]; 
const n = parseInt(commandLineArgument);
if (!isNaN(n) && n >= 0) {
    printPowersOfTwo(n);
} else {
    console.log("Invalid input. Please enter a non-negative integer for 'n'.");
}

//-------output------//

// Invalid input. Please enter a non-negative integer for 'n'.