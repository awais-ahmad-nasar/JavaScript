/*
...>Immediatly Invoked Function Expression i.e ()()
...>Global scope ka pollution se problem hoti ha kahi bar , to us pollution
    ko htany ka lia IIFE use krty
*/

//simple func/polluted func:

// function A(){
//   console.log(`D.B Connected`);
// }

// A()  

//....................................................................................................................................

(function B(){
  console.log(`DB Conncted 1`);
})();      // D.B Connected
 
// for single IIFE we don't need to put ; at last BUT if we need to execute multiple
// we have to put  ; i.e ' (); ' in last else it won't executes bellow func's

//....................................................................................................................................

( () =>{
  console.log(`DB Conncted 2`);

}
)();   

//....................................................................................................................................

( function C(){
  console.log(`DB Conncted 3`);

}
)(); 


//....................................................................................................................................
// Named IIFE
( function D(name){
  console.log(`DB Conncted 4 with server name ${name}`);

}
)('Awais');


//....................................................................................................................................
// simple IIFE
( (name) =>{
  console.log(`DB Conncted 5 with server name ${name}`);

}
)('Awais'); 
