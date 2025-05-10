const sentence = "hello world";
const capitalized = sentence
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalized);
//map(word => ...)
//Loops through each word.

//word.charAt(0).toUpperCase()
//Capitalizes first letter → "H", "W".

//word.slice(1)
//Takes remaining part of word → "ello", "orld".