let num = 50;
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimes() {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    console.log("Sum of prime numbers up to", num, "is:", sum);
}

sumOfPrimes();