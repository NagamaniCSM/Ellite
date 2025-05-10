const numbers = [1, 2, 2, 3, 1, 4, 2];
const count = numbers.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1; //ensures it starts from 0 if the number hasn't appeared yet
  return acc;
}, {});

console.log(count);

// Count Occurrences of Each Element