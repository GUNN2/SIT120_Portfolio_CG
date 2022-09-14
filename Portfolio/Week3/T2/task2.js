var numbers = [1,2,7,6,26];
var lnames = ["gunn", "baker", "pond"];

console.log(numbers);
console.log(lnames);

let test = lnames.join(" + ")

console.log(test);

lnames.pop();

console.log(lnames);

lnames.push("jameson");

console.log(lnames);

let newarray = lnames.concat(numbers);

console.log(newarray);

numbers[0] = 21;

console.log(numbers);

numbers.shift();

console.log(numbers);
