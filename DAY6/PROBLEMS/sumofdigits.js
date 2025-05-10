let n = 123456789;
function sumOfDigits(){
    let sum = 0;
    while(n>0){
        let i = n % 10;
        sum += i;
        n= Math.floor(n/10);
    }
    console.log("sum of digits of a number:", sum);
}
sumOfDigits();