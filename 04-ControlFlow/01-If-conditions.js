// ...........................Logic flow is also control flow...........................



if (2=="2") {
  console.log("executed");      //executed
  
}
else
  console.log("Not executed");


//..............................................................................................................................................................

if (3=="2") {
    console.log("executed");      
    
  }
else
  console.log("Not executed");     // Not executed
  


//..............................................................................................................................................................

if (2==="2") {
  console.log("executed");      
  
}
else
console.log("Not executed");    // Not executed


//..............................................................................................................................................................

if (2!=="2") {
  console.log("executed");       // executed 
  
}
else
console.log("Not executed");


//..............................................................................................................................................................

if (2!="2") {
  console.log("executed");      
  
}
else
console.log("Not executed");     // Not executed


//..............................................................................................................................................................

if (2!=3) {
  console.log("executed");     //  executed 
  
}
else
console.log("Not executed"); 


//..............................................................................................................................................................

const temperature=41
if (temperature===40){
  console.log("less then 50");
  
}else{
  console.log("temp is greater then 50");     // temp is greater then 50
} 

// ...AND...
if (temperature===41){
  console.log("less then 50");    // less then 50
  
}else{
  console.log("temp is greater then 50");    
}



//..............................................................................................................................................................
const score=200
if (score>100){
  let power = "fly"
  console.log(`superman power : ${power}`);   // superman power : fly

}
//console.log(`superman power : ${power}`);    // this line give error coz power is defined in block func not global 
// if we put 'var' instead 'let' then this line executes 


//..............................................................................................................................................................

//shortHandNotation

const balance=1000
//if (balance>500) console.log("test");   // never do this , coz it's not good

if (balance<500){
  console.log("less then 500");

}else if(balance<750){
  console.log("less then 750");

}else if(balance<900){
  console.log("less then 900");

}else{
  console.log("Equal to 1000");   // Equal to 1000
}



//..............................................................................................................................................................

const isUeserLoggedIn = true
const debitCard = true
const loggedInfromEmail =true
const loggedInfromGoogle = false


if (isUeserLoggedIn && debitCard) {   // both must true or both must false
  console.log("Allow to busy course");
  
}

if (loggedInfromGoogle || loggedInfromEmail ){  // one must true other doesn't matter 
  console.log("User Looged in");

}