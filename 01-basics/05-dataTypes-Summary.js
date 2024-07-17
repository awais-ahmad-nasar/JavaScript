/* 

> JavaScript is a dynamically typed language. This means that variable types are determined 
at runtime rather than explicitly declared by the programmer.

> Types of DataTypes in J.S : 

  1) Primitive D.T:
      >> it has 7 types : Number , String , Boolean , null , undefined , Symbol ,
      BigInt.
      >> Examples : 
          ..const score = 100
          ..const scoreVale = 100.6
          ..const isLoggedIn = false
          ..const Temperature = null
          ..let  email ; 
          ..const Id = Symbol('123')
          ..const anotherId = Symbol('123')
          ..const bigNum = 123412343423453n



  2) Reference D.T: 
      >> its also called Non Primitive : Array , Objects ,Functions
      >> Examples :

      ..const heros=["Batman" , "SuperMan" , "Hulk" , "Thor"]
      
      ..let myObj = {
        name : "Awais"
        age : 22
        Degree : "BSAI"
                     }
      
      ..const myFunction = function(){
        console.log("Hello World");
                                     }
        myFunction()


*/

//.........................................

// const Id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(Id===anotherId);  // false



//..........................................

const heros=["Batman" , "SuperMan" , "Hulk" , "Thor"]
for (let index = 0; index < heros.length; index++) {
  
  const element = heros[index];
  console.log(element);

  // ....OR ....

  //console.log(heros[index]);
  
}      



//..........................................

let myObj = {
  name : "Awais",
  age : 22,
  Degree : "BSAI"
};
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key + ": " + myObj[key]);  //for both key/value
  }
}

/* 
> after if condition put these lines: 

console.log(myObj[key]);  // for showing all values
console.log(key);  // for showing all keys

*/


//..........................................

const myFunction = function(){
  console.log("Hello World");

}
myFunction()