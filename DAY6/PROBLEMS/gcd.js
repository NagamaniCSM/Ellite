let a = 60;
let b = 45;
function gcdOfTwoNumbers(){
    while(b!==0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log("GCD of two numbers:",a);

}
gcdOfTwoNumbers();