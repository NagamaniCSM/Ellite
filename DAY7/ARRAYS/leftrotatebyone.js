function leftRotateByOne(){
    const input = prompt("Array elements:");
    let arr = input.split(',').map(Number);
    const firstElement = arr.shift();
    arr.push(firstElement);
    alert("Array after left rotation: " + arr.join(', '));
}
leftRotateByOne();
