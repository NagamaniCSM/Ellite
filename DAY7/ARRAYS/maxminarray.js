const arr = [ 1, 2, 3, 4, 5, 6,];
function maxMinOfArray(){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    console.log("maximum number is:", max);
    console.log("minimum number is:", min);
}
maxMinOfArray();