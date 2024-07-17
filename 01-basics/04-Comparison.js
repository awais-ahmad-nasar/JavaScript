// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);


//....................................................

// console.log("3" > 1);  //true
// console.log("3" < 1);  // false
// console.log(3 < "1");  //  false
// console.log(3 > "1");  //  true



//....................................................
/* Avoid these types of conversion give below */
// console.log(null>0);    // false , in this null=>NaN
// console.log(null>=0);   // true  , in this null=>0
// console.log(null<0);    // false , in this null=>NaN
// console.log(null<=0);   // true  , in this null=>0
// console.log(null==0);   // false , in this null=>NaN
// console.log(null!=0);   // true  in this null=>NaN



//....................................................

/*
      ' === ' using this O.P , it checks strictly 
      i.e it checks not only values , also the datatype 
*/ 

console.log("2" === 2);  // false