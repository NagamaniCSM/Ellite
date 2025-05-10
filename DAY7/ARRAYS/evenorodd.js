const arr = [1,2,3,4,5];
function evenOrOdd(){
    const evenNumbers = arr.filter(num => num % 2 == 0);
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log("Even numbers:",evenNumbers);
    console.log("Odd numbers:", oddNumbers);
}
evenOrOdd();