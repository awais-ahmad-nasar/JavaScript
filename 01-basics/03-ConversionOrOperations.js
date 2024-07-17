// *************************************************CONVERSIONS*************************************************

// let score1 = 33
// console.log(typeof score1);
// console.log(typeof (score1));


// let score2 = "34abc"
// console.log(typeof score2);
// let ValueInNumber=Number(score2)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);  // output =>NaN 


// let score2 = "Awais Ahmad"
// console.log(typeof score2);
// let ValueInNumber=Number(score2)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);   // output =>NaN


// let score2 = null
// console.log(typeof score2);
// let ValueInNumber=Number(score2)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);   //output => 0


// let score2 = undefined
// console.log(typeof score2);
// let ValueInNumber=Number(score2)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);  //output => NaN


// let score2 = true
// console.log(typeof score2);
// let ValueInNumber=Number(score2)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);

//.........................................................................

// let isLoggedIn= 1
// let boolIsLoggedIn=Boolean(isLoggedIn)
// console.log(boolIsLoggedIn)  //output => true

// let isLoggedIn= ""
// let boolIsLoggedIn=Boolean(isLoggedIn)
// console.log(boolIsLoggedIn)    //output => false

// let isLoggedIn= "Awais"
// let boolIsLoggedIn=Boolean(isLoggedIn)
// console.log(boolIsLoggedIn)    //output => true


//.........................................................................

// let SomeNumber=33
// let StringSomeNumber=String(SomeNumber)
// console.log(StringSomeNumber)  // output=> 33
// console.log(typeof StringSomeNumber)   // output=> String


// *************************************************OPERATIONS*************************************************

// let value=3
// let negValue = -value
// console.log(negValue)

//..................................................

// console.log("sum : "+(2+2))
// console.log("Subtract : "+(2-2))
// console.log("Mutiply : "+(2*2))
// console.log("Power : "+(2**3))
// console.log("Divion : "+(2/3))
// console.log("Modulus : "+(2%3))

//..................................................

// let str1="Hello"
// let str2=" Awais"
// let str3=str1+str2
// console.log(str3)

//..................................................

// console.log(1+1);
// console.log("1"+1);
// console.log(1+"1");
// console.log("1"+"1");

//..................................................

// console.log("1"+1+1)  // 111
// console.log(1+1+"1") // 21
// console.log("1"+(1+1))  // 12
// console.log(((3+4)*5)%3) // 2
// console.log((3+4)*5%3)  // 2
// console.log(3+4*5%3)   // 5

//..................................................

// let counter1=100
// counter1++;  
// console.log(counter1);

// let counter2=100
// ++counter2;
// console.log(counter2);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);   // output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);  // output: "a:4, b:4"



/* 

If used postfix, with operator after operand (for example, x++), the increment operator increments 
and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments 
and returns the value after incrementing.

*/
