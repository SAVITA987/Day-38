// 2. Read a Number and Display the week day (Sunday, Monday,...)

const numberToWeekday = (dayNumber) => {
    let weekday;

    switch (dayNumber) {
        case 1:
            weekday = "Sunday";
            break;
        case 2:
            weekday = "Monday";
            break;
        case 3:
            weekday = "Tuesday";
            break;
        case 4:
            weekday = "Wednesday";
            break;
        case 5:
            weekday = "Thursday";
            break;
        case 6:
            weekday = "Friday";
            break;
        case 7:
            weekday = "Saturday";
            break;
        default:
            weekday = "Invalid input. Please enter a number between 1 and 7.";
    }

    return weekday;
};
const inputDayNumber = 3; 
const result = numberToWeekday(inputDayNumber);
console.log(result);

//-----Output------//

// Tuesday