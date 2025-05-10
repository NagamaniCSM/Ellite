let a = 10;
let b = 20;
function swapOfNumbers(){
    console.log("Before swapping a is:",a,"b is:",b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After swapping a is:",a,"b is:",b);
}
swapOfNumbers();