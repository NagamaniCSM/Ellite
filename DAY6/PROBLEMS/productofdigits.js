let n = 123;
function productOfDigits(){
    let prod = 1;
    while(n > 0){
        let digit = n % 10;
        prod *= digit;
        n = Math.floor(n/10);
    }
    console.log("Product of digits:", prod);
}
productOfDigits();
