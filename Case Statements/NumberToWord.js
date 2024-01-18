// 1.Read a single digit number and write the number in word using Case

const numberToWords = (digit) => {
    switch (digit) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "Invalid input. Please enter a single-digit number.";
    }
};

const inputDigit = 7;
const result = numberToWords(inputDigit);
console.log(result);

//--------Output------//

// Seven