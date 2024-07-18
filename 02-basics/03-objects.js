/*

>>> How to declare objects ?
   1) literals
   2) constructor (singleton)

>>> singleton 
    .>when we make object from constructor then it's singleton 
    .>singleton never made by  literal  
    .> i.e Object.create
*/



// ***************************************************literals***************************************************
const mySymbol=Symbol("Key1")

const user={
  name:"Awais",             // name isn't coated with "" , but actually its string "name"
  "Full Name":"Awais Ahmad Nasar",
  age:22,
  location:"RWP",
  email:"awaisbiit4415@gmail.com",
  isLoggedIn:false,
  lastLoggedIn:["Monday","Tuesday"],
  mySymbol:"MyKey1"  // we can't use Symbol as this format 
  // [mySymbol]:"MyKey1"  //thats is way to use
}
console.log(user.email);
console.log(user["email"]);
//console.log(user.Full Name);  // Error 
console.log(user["Full Name"]);
console.log(user.mySymbol);   // MyKey1
console.log(typeof user.mySymbol);   //string


const user1={
  [mySymbol]:"Mykey2"
}
console.log(user1[mySymbol]);   // Mykey2
console.log(typeof user1[mySymbol]);   // string


// ............................................................................................................

/*
Object.freeze() is used to make an object immutable. When an object is frozen,
you can no longer change its properties or add new properties to it.
*/


//Object.freeze(user)      // for below tasks i coment that func
user.email="AwaisBIIT@ChatGPT.com"
console.log(user.email);    // awaisbiit4415@gmail.com



// ............................................................................................................


user.greeting = function(){
  console.log("Hello World");
}
console.log(user.greeting);   // [Function (anonymous)]
console.log(user.greeting());  // Hello World     undefined


user.greeting2 = function(){
  console.log(`Hello User ${this.name}`);
}
console.log(user.greeting2());  //  Hello User Awais   undefined

