// 1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

const generateRandomNumber = () => {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};
let randomValues = [];
for (let i = 0; i < 5; i++) {
    randomValues.push(generateRandomNumber());
}
console.log("Generated Random Values:", randomValues);
let minValue = randomValues[0];
let maxValue = randomValues[0];
for (let i = 1; i < randomValues.length; i++) {
    if (randomValues[i] < minValue) {
        minValue = randomValues[i];
    }
    if (randomValues[i] > maxValue) {
        maxValue = randomValues[i];
    }
}
console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);

//-----Output-----//

//Generated Random Values: [ 258, 674, 855, 997, 655 ]
//Minimum Value: 258
//Maximum Value: 997