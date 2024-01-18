// 4.Write a program that takes User Inputs and does Unit Conversion of different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

const unitConversion = (choice, value) => {
    switch (choice) {
        case 1:
            const feetToInch = value * 12;
            console.log(value + " Feet is equal to " + feetToInch + " Inches");
            break;
        case 2:
            const feetToMeter = value * 0.3048;
            console.log(value + " Feet is equal to " + feetToMeter + " Meters");
            break;
        case 3:
            const inchToFeet = value / 12;
            console.log(value + " Inches is equal to " + inchToFeet + " Feet");
            break;
        case 4:
            const meterToFeet = value / 0.3048;
            console.log(value + " Meters is equal to " + meterToFeet + " Feet");
            break;
        default:
            console.log("Invalid choice. Please enter a valid option.");
    }
};
const userChoice = prompt("Enter your choice (1-4):\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet");
const userValue = parseFloat(prompt("Enter the value for conversion:"));
unitConversion(userChoice, userValue);



