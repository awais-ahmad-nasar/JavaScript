/*
.>>FALSY VALUES:
    1) false
    2) 0
    3) -0
    4) BigInt 0n
    5) null
    6) ""
    7) undefined
    8) NaN

.>>TRUTHY VALUES:
    1) "0"
    2) "false"
    3) []
    4) " "      >if put space then T , if don't have space then F
    5) {}       > object also T
    6) function(){}
*/





const userEmail="awaisbiit4415@gmail.com"

if (userEmail) {
  console.log("Got user email");   // Got user email
  
}else{
  console.log("Don't have user email");
}


//............................................................................................................

const userEmail1=""

if (userEmail1) {
  console.log("Got user email");  
  
}else{
  console.log("Don't have user email");   // Don't have user email
}



//............................................................................................................

const userEmail2=[]

if (userEmail2) {
  console.log("Got user email");    // Got user email
  
}else{
  console.log("Don't have user email");   
}




//............................................................................................................

if (userEmail===0){
  console.log("Array is empty");  // Array is empty
}


//............................................................................................................
const emptyObj={}
if (Object.keys(emptyObj).length ===0) {
  console.log("Object is empty");  // Array is empty
}


// *******************************Nullish Coalescing Operator i.e' ?? ' : null,undefined*******************************

let val1;
val1=5 ?? 10
console.log(val1);  // 5



let val2;
val2=null ?? 10
console.log(val2);    // 10

let val3;
val3=undefined ?? 13
console.log(val3);   // 13

let val4;
val4=null ?? 13 ?? 14
console.log(val4);  // 13


// *******************************Terniary operator*******************************

// SYNTAX >>> condition ? true : false

const icePrice = 100
icePrice <=80 ? console.log("less then 80") : console.log("more then 80");    // more then 80
