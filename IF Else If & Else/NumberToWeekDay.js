//2.User Read a Number and Display the week day (Sunday, Monday,...) 
const numberToWeekday = (dayNumber) => {
    if (dayNumber === 1) {
        return "Sunday";
    } else if (dayNumber === 2) {
        return "Monday";
    } else if (dayNumber === 3) {
        return "Tuesday";
    } else if (dayNumber === 4) {
        return "Wednesday";
    } else if (dayNumber === 5) {
        return "Thursday";
    } else if (dayNumber === 6) {
        return "Friday";
    } else if (dayNumber === 7) {
        return "Saturday";
    } else {
        return "Invalid input. Please enter a number between 1 and 7.";
    }
};
const inputDayNumber = 3; 
const result = numberToWeekday(inputDayNumber);
console.log(result);

//------Output------//
//Tuesday
