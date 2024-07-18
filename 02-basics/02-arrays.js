const myHeros = ["SuperMan","Batman","Thor"]
const dc_heros = ["Flash","IronMan","Hulk"]


// .........................................................................................

//this method of merging is not good at all

myHeros.push(dc_heros)
console.log(myHeros);  // [ 'SuperMan', 'Batman', 'Thor', [ 'Flash', 'IronMan', 'Hulk' ] ]
console.log(myHeros[3]);  // [ 'Flash', 'IronMan', 'Hulk' ]
console.log(myHeros[3][2]);  // Hulk



// .........................................................................................

const newheros=myHeros.concat(dc_heros)
console.log(newheros);   // [ 'SuperMan', 'Batman', 'Thor', 'Flash', 'IronMan', 'Hulk' ]


// .........................................................................................
//spreading technique/spread operator. it is good then concat
const newheros1 = [ ...myHeros, ...dc_heros]
console.log(newheros1);



// .........................................................................................
//spread nested array into single array
const arry=[ 1,2,3,[4,5,6], 7, [ 8,9, [10,11] ] ]
const arry1 = arry.flat(Infinity)
console.log(arry1);


// .........................................................................................

console.log(Array.isArray("Awais"));   // false
console.log(Array.isArray(["Awais"]));  // true
console.log(Array.from("Awais"));   //  [ 'A', 'w', 'a', 'i', 's' ]


console.log(Array.from({name:"Awais"}));   //  []
const obj = {name: "Awais"};
const arrayFromEntries = Object.entries(obj);
console.log(arrayFromEntries);   // [["name", "Awais"]]


const arrayFromKeys = Object.keys(obj);
console.log(arrayFromKeys);   // ["name"]

const arrayFromValues = Object.values(obj);
console.log(arrayFromValues); // ["Awais"]



const myObject = {
  name: "Awais",
  age: 22,
  occupation: "Developer",
  country: "Pakistan",
  hobby: "Reading"
};

// Array of keys
const keysArray = Object.keys(myObject);
console.log("Keys:", keysArray); // ["name", "age", "occupation", "country", "hobby"]

// Array of values
const valuesArray = Object.values(myObject);
console.log("Values:", valuesArray); // ["Awais", 25, "Engineer", "Pakistan", "Reading"]

// Array of key-value pairs (entries)
const entriesArray = Object.entries(myObject);
console.log("Entries:", entriesArray); // [["name", "Awais"], ["age", 25], ["occupation", "Engineer"], ["country", "Pakistan"], ["hobby", "Reading"]]


// .........................................................................................

let score1=100
let score2=200
let score3=800
let score4=500
let score5=600
let score6=300

console.log(Array.of(score1,score2,score3,score4,score5,score6));   // [ 100, 200, 800, 500, 600, 300 ]
