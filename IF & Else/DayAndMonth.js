// 2. Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
const isBetweenMarchAndJune = (day, month) => {
    if (month >= 3 && month <= 6) {
        if ((month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day <= 20)) {
            return true;
        }
    }
    return false;
};
const inputDay = 25; 
const inputMonth = 4; 
const result = isBetweenMarchAndJune(inputDay, inputMonth);
console.log(result);

//-------Output------//

//true