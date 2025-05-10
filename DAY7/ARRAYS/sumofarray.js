const arr = [1,2,3,4,5];
function sumOfArray(){
    const sum = arr.reduce((accumulator,current) => accumulator+current , 0);
    console.log("Sum of elements in array:", sum);
}
sumOfArray();