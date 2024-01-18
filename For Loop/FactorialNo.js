// 5.Write a program that computes a factorial of a number taken as input. 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

const calculateFactorial = (number) => {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    } else {
        let factorialResult = 1;

        for (let i = 1; i <= number; i++) {
            factorialResult *= i;
        }

        return factorialResult;
    }
};

const inputNumber = 5;
const factorialOf5 = calculateFactorial(inputNumber);
console.log(`Factorial of ${inputNumber} is: ${factorialOf5}`);


//------output------//

// Factorial of 5 is: 120