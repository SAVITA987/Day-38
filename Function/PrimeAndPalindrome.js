// 3. Take a number from user and check if the number is a Prime then show that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};
const getPalindrome = (number) => {
    let originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return reversedNumber;
};
const checkPrimeAndPalindrome = (inputNumber) => {
    if (isPrime(inputNumber)) {
        const palindrome = getPalindrome(inputNumber);

        console.log(`Original Number: ${inputNumber}`);
        console.log(`Palindrome: ${palindrome}`);

        if (isPrime(palindrome)) {
            console.log("Both the number and its palindrome are prime.");
        } else {
            console.log("The number is prime, but its palindrome is not prime.");
        }
    } else {
        console.log("The number is not prime.");
    }
};
const userInput = parseInt(prompt("Enter a number:"));
checkPrimeAndPalindrome(userInput);
