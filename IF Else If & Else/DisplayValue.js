//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const displayPlaceValues = (number) => {
    if (number >= 1 && number < 10) {
        console.log("Unit: " + number);
    } else if (number >= 10 && number < 100) {
        const unit = number % 10;
        const ten = Math.floor(number / 10);
        console.log("Unit: " + unit);
        console.log("Ten: " + ten);
    } else if (number >= 100 && number < 1000) {
        const unit = number % 10;
        const ten = Math.floor((number % 100) / 10);
        const hundred = Math.floor(number / 100);
        console.log("Unit: " + unit);
        console.log("Ten: " + ten);
        console.log("Hundred: " + hundred);
    } else {
        console.log("Invalid input. Please enter a positive number between 1 and 999.");
    }
};
const inputNumber = 256; 
displayPlaceValues(inputNumber);

//------Output-------//

/* 
Unit: 6
Ten: 5
Hundred: 2
*/
