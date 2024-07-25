

for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);    // 0 to 9 output values
}


// ..................................................................................................................

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element==5) {
    console.log("5 is best number");
    break
  }
  console.log(element);    
}


/*
>>>OUTPUT<<<<<

1
2
3
4
5 is best number

*/


// ..................................................................................................................

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element==5) {
    console.log("5 is best number");
  }
  console.log(element);    
}


/*>>>OUTPUT<<<<<

0
1
2
3
4
5 is best number
5
6
7
8
9


*/


// ..................................................................................................................

for (let i = 0; i <= 10; i++) {
  console.log(`OuterLoop value : ${i}`);
  for (let j = 0; j <=5; j++) {
    console.log(`InnerLoop value : ${j} AND Outer value : ${i}`);
    
  }
  
}



// ..................................................................................................................

for (let i = 1; i <= 10; i++) {
  console.log(`OuterLoop value : ${i}`);
  for (let j = 1; j <=10; j++) {
    console.log(i + 'X' + j + ' = ' + i*j);
    
  }
  
}


// ...................................................................................................................


let myArray=["Flash","Batman","Thor","SuperMan"]
console.log("Array Length : ",myArray.length);
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

/*
>>>>OUTPUT<<<<<

Array Length :  4
Flash
Batman
Thor
SuperMan

*/

// ..................................................................................................................
// break and continue operations

for (let i = 1; i <=20; i++) {
  if (i==5) {
    console.log("Detected value : 5");
    break    //    
  }
  console.log(`Value of i : ${i}`);
  
}

/*
>>>>OUTPUT<<<<<
Value of i : 1
Value of i : 2
Value of i : 3
Value of i : 4
Detected value :  5
*/


for (let i = 1; i <=20; i++) {
  if (i==5) {
    console.log("Detected value : 5");
    continue   
  }
  console.log(`Value of i : ${i}`);
  
}

/*
>>>>OUTPUT<<<<<

Value of i : 1
Value of i : 2
Value of i : 3
Value of i : 4
Detected value : 5
Value of i : 6
Value of i : 7
Value of i : 8
Value of i : 9
Value of i : 10
Value of i : 11
Value of i : 12
Value of i : 13
Value of i : 14
Value of i : 15
Value of i : 16
Value of i : 17
Value of i : 18
Value of i : 19
Value of i : 20
*/