// 3.Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const displayPlaceValues = (number) => {
    switch (true) {
        case (number >= 1 && number < 10):
            console.log("Unit: " + number);
            break;
        case (number >= 10 && number < 100):
            const unit = number % 10;
            const ten = Math.floor(number / 10);
            console.log("Unit: " + unit);
            console.log("Ten: " + ten);
            break;
        case (number >= 100 && number < 1000):
            const unitHundreds = Math.floor(number / 100);
            const unitTens = Math.floor((number % 100) / 10);
            const unitUnits = number % 10;
            console.log("Unit: " + unitUnits);
            console.log("Ten: " + unitTens);
            console.log("Hundred: " + unitHundreds);
            break;
        default:
            console.log("Invalid input. Please enter a positive number between 1 and 999.");
    }
};
const inputNumber = 256; 
displayPlaceValues(inputNumber);

//-------Output--------//

/*
Unit: 6
Ten: 5
Hundred: 2
*/