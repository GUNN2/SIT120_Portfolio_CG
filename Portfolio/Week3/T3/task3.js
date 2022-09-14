let d = new Date(2018, 6,11,6,7,4,3);
console.log (d);

console.log(d.getDay());
console.log(d.getTimezoneOffset());


let test = d.toDateString();

test = test + " new years";

console.log(test);

console.log(d.getUTCSeconds());

d.setMonth(3)

console.log(d)
