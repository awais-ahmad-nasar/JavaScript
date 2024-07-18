/*

parameters : when you make a defination of function.
             i.e: Addition(num1,num2) where num1,num2 are parameters

Arguments :  During calling and passes the values  
             i.e: Addition(n1,n2) where n1,n2 are arguments

*/



// console.log("A");
// console.log("W");
// console.log("A");
// console.log("I");
// console.log("S");


// instead of doing above create simple function to write

function MyName(){

  console.log("A");
  console.log("W");
  console.log("A");
  console.log("I");
  console.log("S");

}
MyName()


//...............................................................................................

function Addition(num1,num2){
  return num1+num2
}

n1=100
n2=100
console.log(Addition(n1,n2));

//....................................

function Addition(num1,num2){
  console.log(num1+num2); 
}

Addition(100,100);

//....................................

function Addition(num1,num2){
  console.log(num1+num2); 
}

Addition(100,'a');   // 100a


//..........mistakes done by begginers.............

function Addition(num1,num2){
  console.log(num1+num2); 
}

const result=Addition(100,100);
console.log("Result : ",result);   //undefined



function Addition(num1,num2){
  let result = num1+num2 
  return result
  console.log("Awais");  // this won't execute coz of returning result 
}

const result1=Addition(100,100);
console.log("Result : ",result1);


//....................................

function loginMsg(username){
  return `${username} just logged in`
}
console.log(loginMsg("Awais"));  // Awais just logged in
console.log(loginMsg());   // undefined just logged in




function loginMsg(username){
  if (username===undefined) {
     console.log("please Enter User name");
     return
  }
  return `${username} just logged in`
  
}

console.log(loginMsg());  // please Enter User name




function loginMsg(username="sam"){
  if (username===undefined) {
     console.log("please Enter User name");
     return
  }
  return `${username} just logged in`
  
}

console.log(loginMsg());   // sam just logged in



function loginMsg(username="sam"){
  if (username===undefined) {
     console.log("please Enter User name");
     return
  }
  return `${username} just logged in`
  
}

console.log(loginMsg("Awais"));   // Awais just logged in




//..................................................................................................................

function calculateprice(...num1){     // ...num1 : this is rest operator
  return num1
}
console.log(calculateprice(200,300,400));  // [ 200, 300, 400 ]



function calculateprice(val1,val2,...num1){     
  return num1
}
console.log(calculateprice(200,300,400,600,500));  // [ 400, 600, 500 ]   where 200,300 are assing to val1,val2



//..................................................................................................................

const user={
  username : "Awais Ahmad",
  price : 199
}

function handleObject(anyObject){
  console.log(` user name is : ${anyObject.username} , and price of his book is : ${anyObject.price} `);

}

handleObject(user)
//..OR...
handleObject({
  username:"Awais Ahmad",
  price:299
})


//..................................................................................................................


function returnSecondValue(getArray){
  return getArray[1]

}
const myarray=[200,400,100,600]
console.log(returnSecondValue(myarray));    // 400
//..OR..
console.log(returnSecondValue([200,400,100,600]))   // 400


