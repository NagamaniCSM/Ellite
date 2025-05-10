const messy = "He!!o @#Wor$ld123";
const clean = messy.replace(/[^a-zA-Z0-9]/g, '');
console.log(clean);
//Replace Special Characters with Empty String
