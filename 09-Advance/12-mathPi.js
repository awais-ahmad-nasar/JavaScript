// This topic is related to the Object.....

// console.log(Math.PI);     // 3.141592653589793
// Math.PI = 5               // but don't overide
// console.log(Math.PI);     // 3.141592653589793  



const Descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Descriptor);
/*
<<<<<<<<OUTPUT>>>>>>>>>

{
  value: 3.141592653589793,
  writable: false,       // means don't overide
  enumerable: false,
  configurable: false
}

*/


//.............................................................................................................................................................................
const MyOBJ={
    name:"Awais",
    price:244,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(MyOBJ));         // undefined
console.log(Object.getOwnPropertyDescriptor(MyOBJ,'name'));         
/*
<<<<<<<<OUTPUT>>>>>>>>>
{
    value: 'Awais',
    writable: true,
    enumerable: true,
    configurable: true
  }
*/




//.............................................................................................................................................................................
const MyOBJ1={
    name:"Awais",
    price:244,
    isAvailable:true
}
Object.defineProperty(MyOBJ1,'name',{
    writable:false,
    enumerable:false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(MyOBJ1,'name'));         
/*
<<<<<<<<OUTPUT>>>>>>>>>
{
    value: 'Awais',
    writable: false,
    enumerable: false,
    configurable: false
  }
*/



//.............................................................................................................................................................................

const MyOBJ2={
    name:"Awais",
    price:244,
    isAvailable:true,
    order:function(){
        console.log("All is Well");
        
    }
}

for (let [key,value] of Object.entries(MyOBJ2)) {
    console.log(`${key} : ${value} `);
    
}

/*
<<<<<<<OUTPUT>>>>>>>>>

name : Awais 
price : 244 
isAvailable : true 
order : function(){
        console.log("All is Well");
        
    } 

*/


//.............................................................................................................................................................................

const MyOBJ3={
    name:"Awais",
    price:244,
    isAvailable:true,
    order:function(){
        console.log("All is Well");
        
    }
}
for (let [key,value] of Object.entries(MyOBJ3)) {
    if(typeof value !=='function'){
        console.log(`${key} : ${value} `);
    }  
}
/*
<<<<<<<OUTPUT>>>>>>>>>

name : Awais 
price : 244 
isAvailable : true 
*/



//.............................................................................................................................................................................
// if you want changing
const MyOBJ4={
    name:"Awais",
    price:244,
    isAvailable:true,
    order:function(){
        console.log("All is Well");
        
    }
}
Object.defineProperty(MyOBJ4,'name',{
    enumerable:false      // if you put true you'll get > name : Awais
})
for (let [key,value] of Object.entries(MyOBJ4)) {
    if(typeof value !=='function'){
        console.log(`${key} : ${value} `);
    }  
}
/*
in this you will only get two objects
<<<<<<<OUTPUT>>>>>>>>>

price : 244 
isAvailable : true 

*/