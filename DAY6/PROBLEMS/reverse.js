let num = 123;
function reverseNumber(){
    let strNum = num.toString();
    let reversednum = strNum.split('').reverse().join('');
    console.log("REVERSED NUMBER IS:",reversednum);
}
reverseNumber();