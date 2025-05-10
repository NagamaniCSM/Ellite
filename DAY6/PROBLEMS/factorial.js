let n = 5;
function factorialNumber(){
    let fact = 1;
    for(let i=1; i<=n;i++)
        fact = fact*i;
    console.log("Factorial of",n,"is:",fact);
}
factorialNumber();