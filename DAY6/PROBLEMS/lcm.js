let a = 30;
let b = 60;
function lcmOfTwoNumbers(){
     let originalA = a, original = b;
    while (b != 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    let gcd = a;
    let lcm = (originalA * original) / gcd;
    console.log("LCM of two numbers:",lcm);
}
lcmOfTwoNumbers();