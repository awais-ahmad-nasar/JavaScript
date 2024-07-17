/*

Stack (primitive)
Heap (Non-primitive)

1) Primitive Types and Stack:
    .>Primitive types in JavaScript include undefined, null, boolean, number, string, symbol, and bigint.
    .?These types are stored directly on the stack. They are immutable, meaning that their values cannot be changed.

2) Objects and Heap:
    .>Non-primitive types, like objects, arrays, and functions, are stored in the heap.
    .>The variable that references an object or array holds a reference to the memory location in the heap where the 
    object or array is stored. This reference itself is stored on the stack.
    .>Stores the actual objects and arrays.

*/



//...............................................................


let myGithubName = "awaisahmadnasar"
let anotherName = myGithubName
anotherName="awaisahmad"
console.log(myGithubName);  
console.log(anotherName);  


//...............................................................

let user1={
  email:"awaisbiit4415@gmail.com",
  age:22,
  gender:"male"
};

let user2=user1
user2.email="Awais@gmail.com"
console.log(user1.email);  //Awais@gmail.com
console.log(user2.email);  //Awais@gmail.com


//...............................................................

let a = 42; // primitive type (number), stored on the stack
let b = a; // primitive type (number), and a copy of 'a' is made

a = 50; 

console.log(a); // 50
console.log(b); // 42

let obj1 = { name: "Awais" }; // object, stored in the heap, 'obj1' holds a reference on the stack
let obj2 = obj1; // 'obj2' is another reference to the same object in the heap

obj1.name = "John"; 

console.log(obj1.name); // John
console.log(obj2.name); // John, since both 'obj1' and 'obj2' reference the same object in the heap
