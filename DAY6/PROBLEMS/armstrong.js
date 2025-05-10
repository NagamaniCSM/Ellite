let num = 153;

function isArmstrongNumber() {
    let strNum = num.toString();
    let power = strNum.length;
    let sum = 0;

    for (let digit of strNum) {
        sum += Math.pow(parseInt(digit), power);
    }

    if (sum === num) {
        console.log(num + " is an Armstrong number.");
    } else {
        console.log(num + " is not an Armstrong number.");
    }
}

isArmstrongNumber()