// 2.Write a function to check if the two numbers are Palindromes 

const isPalindrome = (number) => {
    const originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        const digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    return originalNumber === reversedNumber;
};
const arePalindromes = (num1, num2) => {
    return isPalindrome(num1) && isPalindrome(num2);
};

const number1 = 121;
const number2 = 1221;

if (arePalindromes(number1, number2)) {
    console.log(`${number1} and ${number2} are palindromes.`);
} else {
    console.log(`${number1} and ${number2} are not palindromes.`);
}

//--------Output-----//

// 121 and 1221 are palindromes.