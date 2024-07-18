/*
   >> {} : these braces are scope
   >> in browser the global scope is different , in code enviroment through node global scope is different
   >> in browser the Global Execution Context is different from code enviroment i.e nodejs
   >> in browser 'this' value act as Window object
   >> another type is Functional/Function Execution Context
*/


// ..............................................................................................................
if (true) {
  let a = 40
  const b = 20
  var c = 50  
}

//console.log(a);    // Error coz a is not defined 
//console.log(b);    // Error coz b is not defined
console.log(c);      //  50



// ..............................................................................................................

var c = 300
if (true) {
  let a = 40
  const b = 20
  var c = 50  
}
console.log(c);  // 50
// thats why we don't use 'var'

// ..............................................................................................................

//global scope
let a = 300
// block scope
if (true) {
  let a = 40     // if we write anything in global then it's available in block scope , but in block scope it shouldn't goes outside
  const b = 20 
  console.log("inner: ",a);
}
console.log("outer: ",a);  // 300




//********************************************NestedScope********************************************

function one(){
  const username="Awais"
  function two(){
    const wesite="Facebook"
    console.log(username);
  }
  //console.log(wesite);  // Error coz website is in two() block func 
  two()
}

one()


// ..............................................................................................................

if (true){
  const username="Awais"

  if (username==="Awais"){

    const website="Instagram"
    console.log(username+" "+website);

  }
  //console.log(website);    // Error coz website is in block func 
}
//console.log(username);  // Error coz username is also in block func 



// ..............................................................................................................
//simple function
function addOne(value){
  return value +=1
}
console.log(addOne(5));  // 6


// ..............................................................................................................
//Expression : it act like variable which holds json values , functions etc
const addTwo=function(value){
  return value +=2
}
console.log(addTwo(5));  // 7