// ***********************************NUMBERS***********************************

const score=100
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);  //3
console.log(balance.toFixed(2)); // 100.00

const otherNumber1=23.45589
console.log(otherNumber1.toPrecision(3));  //23.5

const otherNumber2=123.45589
console.log(otherNumber2.toPrecision(3));  //123


const otherNumber3=123.89554
console.log(otherNumber3.toPrecision(3));  //124
console.log(otherNumber3.toPrecision(4));  //123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // 1,000,000



// ***********************************MATHS***********************************

console.log(Math.abs(-4));  // +4 :> because pos will remain same but only neg value will change to pos
console.log(Math.round(4.8)); // 5
console.log(Math.ceil(4.8)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.sqrt(64));   // 8

console.log(Math.min(4,3,7,8,9));  // 3
console.log(Math.max(4,3,7,8,9));  // 9

console.log(Math.random());  // after run this , values will in b/w '0' and '1'
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10 
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);  // adding 1 used for zero case avoidance