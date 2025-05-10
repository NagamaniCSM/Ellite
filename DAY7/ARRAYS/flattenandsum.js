const arr = [1, [2, [3, 4]], 5];
const sum = arr.flat(2).reduce((acc, cur) => acc + cur, 0);
console.log("Sum:", sum);
// Flatten and Sum All Elements