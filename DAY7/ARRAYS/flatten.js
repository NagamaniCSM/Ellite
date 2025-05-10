const arr = [1, [2, [3, 4]], 5, [6]];
const evens = arr.flat(2).filter(x => x % 2 === 0);
console.log(evens);
//Flatten and Filter Even Numbers