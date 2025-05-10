let arr = [1, 2, 3, 4, 5, 6];
function secondLargest(){
    const largest = Math.max(...arr);
    arr = arr.filter(num => num !== largest);
    const secondLargest = Math.max(...arr);
    console.log("Second Largest Number in array :", secondLargest);
    
}
secondLargest();