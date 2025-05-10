let num = 3;

function checkPrime() {
    if (num <= 1) {
        console.log(num + " is not a prime number.");
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is not a prime number.");
    }
}

checkPrime();

