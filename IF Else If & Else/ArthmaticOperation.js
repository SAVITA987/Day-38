//Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
// 1. a + b * c    3. c + a / b
// 2. a % b + c    4. a * b + c

const performOperations = (a, b, c) => {
    // Arithmetic operations
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;

    let maxResult = result1;
    let minResult = result1;

    if (result2 > maxResult) {
        maxResult = result2;
    } else if (result2 < minResult) {
        minResult = result2;
    }

    if (result3 > maxResult) {
        maxResult = result3;
    } else if (result3 < minResult) {
        minResult = result3;
    }

    if (result4 > maxResult) {
        maxResult = result4;
    } else if (result4 < minResult) {
        minResult = result4;
    }

    // Display results
    console.log("Result 1 (a + b * c): " + result1);
    console.log("Result 2 (a % b + c): " + result2);
    console.log("Result 3 (c + a / b): " + result3);
    console.log("Result 4 (a * b + c): " + result4);

    console.log("\nMaximum Result: " + maxResult);
    console.log("Minimum Result: " + minResult);
};
const inputA = 5;
const inputB = 3; 
const inputC = 2; 
performOperations(inputA, inputB, inputC);

//-----output------//
/*
Result 1 (a + b * c): 11
Result 2 (a % b + c): 4
Result 3 (c + a / b): 3.666666666666667
Result 4 (a * b + c): 17

Maximum Result: 17
Minimum Result: 3.666666666666667
*/

