// 6.Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

const primeFactors = (number) => {
    console.log("Prime Factors of " + number + ": ");
    while (number % 2 === 0) {
        console.log(2);
        number = number / 2;
    }
    for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
        while (number % i === 0) {
            console.log(i);
            number = number / i;
        }
    }
    if (number > 2) {
        console.log(number);
    }
};
const inputNumber = 56;
primeFactors(inputNumber);


//-------Output-------//
/*
Prime Factors of 56: 
2
2
2
7
*/