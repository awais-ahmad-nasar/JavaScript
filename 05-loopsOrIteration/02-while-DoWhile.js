let index=0
while (index<=10) {
  console.log(`Value of index : ${index}`);
  index +=2
  
}

//.........................................................................................................

let myArray=["Flash","Batman","Thor","SuperMan"]
let arr=0
while (arr<myArray.length) {
  console.log(`Value is : ${myArray[arr]}`);
  arr++
}

/*
>>>>>OUTPUT<<<<<<

Value is : Flash
Value is : Batman
Value is : Thor
Value is : SuperMan
*/


//.........................................................................................................

let score1=1
do {
  console.log(`Score is ${score1}`);
  score1++
} while (score1<=10);


/*
>>>>>OUTPUT<<<<<<

Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10
*/

//.........................................................................................................

let score2=11
do {
  console.log(`Score is ${score2}`);    // Score is 11
  score2++
} while (score2<=10);

