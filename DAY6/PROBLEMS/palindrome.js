let num = 121;

function checkPalindromeNumber() {
    let strNum = num.toString();
    let reversednum = strNum.split('').reverse().join('');

    if (strNum === reversednum) {
        console.log(num + " is a palindrome.");
    } else {
        console.log(num + " is not a palindrome.");
    }
}

checkPalindromeNumber();
