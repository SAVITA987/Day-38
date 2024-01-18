//4.Extend the program to take a range of number as input and output the Prime Numbers in that range.

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
const findPrimesInRange = (start, end) => {
    console.log(`Prime numbers between ${start} and ${end}:`);
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
};
const rangeStart = 10;
const rangeEnd = 50;
findPrimesInRange(rangeStart, rangeEnd);

//------output-------//

/*
Prime numbers between 10 and 50:
11
13
17
19
23
29
31
37
41
43
47
*/