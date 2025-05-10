const text = "hello world";
const result = text.replace(/[aeiou]/g, '*');
console.log(result);
///[aeiou]/g is a regular expression used as the first argument.

//Let’s break this regex:

//[aeiou] → This is a character set that matches any one vowel: 'a', 'e', 'i', 'o', or 'u'.

///.../g → The g flag stands for global, which means: "Replace every match in the entire string," not just the first one.
