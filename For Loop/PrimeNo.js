// 3.Write a program that takes a input and determines if the number is a prime.

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
const inputNumber = 17; 
const result = isPrime(inputNumber);
if (result) {
    console.log(inputNumber + " is a prime number.");
} else {
    console.log(inputNumber + " is not a prime number.");
}

//------Output------//

//17 is a prime number.