/*
>> 'this' keyword is used to reffer current context 
*/

const user={
  username:"Awais",
  price:999,
  welcomeMessage : function(){
    console.log(`${this.username} , Wellcome to Github`);
  
  }
}
user.welcomeMessage()   // Awais , Wellcome to Github
user.username="Ahmad"
user.welcomeMessage()   // Ahmad , Wellcome to Github


//................................................................................................................

const user={
  username:"Awais",
  price:999,
  welcomeMessage : function(){
    console.log(`${this.username} , Wellcome to Github`);
    console.log(this);
  }
}

user.welcomeMessage()  
/*
OUTPUT:

Awais , Wellcome to Github
{
  username: 'Awais',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
user.username="Ahmad"
user.welcomeMessage()
/*
OUTPUT:

Ahmad , Wellcome to Github
{
  username: 'Ahmad',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/



//................................................................................................................
function myfunc(){
  let username="Awais"
  console.log(this.username);
}
myfunc()    // undefined


const myfunc1 = function(){
  let username="Awais"
  console.log(this.username);  
}
myfunc1()      // undefined



const myfunc2 = () => {
  let username="Awais"
  console.log(this.username);   // undefined 
}
myfunc2()


//***************************************************PURE ARROW FUNC***************************************************
//.........explicit return........
const addition1 = (num1,num2)=>{
  return num1+num2
}
console.log(addition1(4,3));   // 7

//.........implicit return........

const addition2 = (num1,num2 ) => num1+num2
console.log(addition2(4,3));   // 7 

const addition3 = (num1,num2 ) => (num1+num2)
console.log(addition3(4,3));   // 7 


const addition4 = (num1,num2 ) => {name:"Awais"}
console.log(addition4(4,3));   // undefined

const addition5 = (num1,num2 ) => ({name:"Awais"})
console.log(addition5(4,3));   // { name: 'Awais' }


// if you rap num1,num2 with { } then you must have to return


