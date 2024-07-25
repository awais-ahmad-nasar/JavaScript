// Today's topic : Array,objects related loops
// for OBJECTS best is to put ' for in ' loop 
// for ARRAYS best is to put ' for of ' loop and multi more
// ********************************************* FOR OF loop *********************************************

const arr=[1,2,3,4,5,6,7,8,9]
for (const num of arr) {
  console.log(num);
  
}

/*
<<<<<OUTPUT>>>>>
1
2
3
4
5
6
7
8
9
*/

//................................................................................................................................................................................
const greetings="Hello World"
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}


/*
<<<<<OUTPUT>>>>>
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is W
Each char is o
Each char is r
Each char is l
Each char is d
*/



//................................................................................................................................................................................

const greetings1 = "Hello World";
for (const greet of greetings1) {
  if (greet !== ' ') {
    console.log(`Each char is ${greet}`);
  }
}


/*
<<<<<OUTPUT>>>>>
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is W
Each char is o
Each char is r
Each char is l
Each char is d
*/


//................................................................................................................................................................................

const greetings2 = "Hello World";
const words = greetings2.split(' ');
for (const word of words) {
  console.log(word);
}

/*
<<<<<OUTPUT>>>>>
Hello
World
*/

// ********************************************* MAPS loop *********************************************
// Map is an object which holds key,value pairs
// in Objects it doesn't follow order , Map reminds/keeps insertion order of keys
// collection of key,value pairs with No duplicate values but unqiue

const map = new Map()
map.set('PAK','Pakistan')
map.set('USA','United State of America')
map.set('Fr','France')

console.log(map);

/*
<<<<<OUTPUT>>>>>
Map(3) {
  'PAK' => 'Pakistan',
  'USA' => 'United State of America',
  'Fr' => 'France'
}
*/




const map1 = new Map()
map1.set('PAK','Pakistan')
map1.set('USA','United State of America')
map1.set('Fr','France')
map1.set('PAK','Pakistan') // duplicate


console.log(map1);

/*
<<<<<OUTPUT>>>>>
Map(3) {
  'PAK' => 'Pakistan',
  'USA' => 'United State of America',
  'Fr' => 'France'
}
*/


//................................................................................................................................................................................

const map2 = new Map()
map2.set('PAK','Pakistan')
map2.set('USA','United State of America')
map2.set('Fr','France')
map2.set('PAK','Pakistan') // duplicate

for (const key of map2) {
  console.log(key);
  
}


/*
<<<<<OUTPUT>>>>>

[ 'PAK', 'Pakistan' ]
[ 'USA', 'United State of America' ]
[ 'Fr', 'France' ]

*/



const map3 = new Map()
map3.set('PAK','Pakistan')
map3.set('USA','United State of America')
map3.set('Fr','France')
map3.set('PAK','Pakistan') // duplicate

for (const [key,value] of map3) {
  console.log(key,' : ',value);
  
}

/*
<<<<<OUTPUT>>>>>

PAK  :  Pakistan
USA  :  United State of America
Fr  :  France

*/



//................................................................................................................................................................................

const myobj={
  'game1':'NFS',
  'game2':'Spiderman',
  'game3':'Pubg'
}
for (const [key,value] of myobj) {
  console.log(key,' : ',value);   
}

//  ERROR : myobj is not iterable 
// for Object , FOR OF loop doesn't work


// ********************************************* FOR IN loop *********************************************

const myObject={
  js:'JavaScript',
  cpp:'C++',
  rb:'ruby',
  swift:'swift apple'
}
for (const key in myObject) {
  console.log(key);
}

/*
<<<<<OUTPUT>>>>>

js
cpp
rb
swift
*/


//................................................................................................................................................................................

const myObject1={
  js:'JavaScript',
  cpp:'C++',
  rb:'ruby',
  swift:'swift apple'
}
for (const key in myObject1) {
  console.log(myObject1[key]);
}

/*
<<<<<OUTPUT>>>>>

JavaScript
C++
ruby
swift apple
*/


//................................................................................................................................................................................

const myObject2={
  js:'JavaScript',
  cpp:'C++',
  rb:'ruby',
  swift:'swift apple'
}
for (const key in myObject2) {
  console.log(`${key} means ${myObject2[key]}`);
}

/*
<<<<<OUTPUT>>>>>

js means JavaScript
cpp means C++
rb means ruby
swift means swift apple

*/

//................................................................................................................................................................................

const programs=['js','java','py','rb','cpp']
for (const key in programs) {
  console.log(key);
  
}


/*
<<<<<OUTPUT>>>>>

0
1
2
3
4
*/


//................................................................................................................................................................................

const programs1=['js','java','py','rb','cpp']
for (const key in programs1) {
  console.log(programs1[key]);
  
}


/*
<<<<<OUTPUT>>>>>

js
java
py
rb
cpp

*/


//................................................................................................................................................................................

const map4 = new Map()
map4.set('PAK','Pakistan')
map4.set('USA','United State of America')
map4.set('Fr','France')
map4.set('PAK','Pakistan')

for (const key in map4) {
  console.log(key);   // nothing shows

}

//in above case of map we can't perform operation i.e for in loop


//................................................................................................................................................................................
// ********************************************* FOR EACH loop *********************************************
/*
Ambarella function:
      function A(){}   : in this we give name of func

forEach function : 
      function () {}  : in this we don't give name of func



*/

//............................
const coding = ['js','java','py','rb','cpp']
coding.forEach( function (items) { 
  console.log(items);      

})

/*
<<<<<OUTPUT>>>>>
js
java
py
rb
cpp
*/


//............................
coding.forEach( (items) => {
  console.log(items);

})

/*
<<<<<OUTPUT>>>>>
js
java
py
rb
cpp
*/

//............................
function printMe(item){
  console.log(item);
}
coding.forEach(printMe)

/*
<<<<<OUTPUT>>>>>
js
java
py
rb
cpp
*/


//............................
coding.forEach( (items,index,arr) => {
  console.log(items,index,arr);

})

/*
<<<<<OUTPUT>>>>>

js 0 [ 'js', 'java', 'py', 'rb', 'cpp' ]
java 1 [ 'js', 'java', 'py', 'rb', 'cpp' ]
py 2 [ 'js', 'java', 'py', 'rb', 'cpp' ]
rb 3 [ 'js', 'java', 'py', 'rb', 'cpp' ]
cpp 4 [ 'js', 'java', 'py', 'rb', 'cpp' ]

*/


//................................................................................................................................................................................
/*

>>>>The values comes from the DataBase always in the form of  
    Arrays format and each values are in the form of Objects
    given below .
*/
const MyCoding=[
  {
    language:'JavaScript',
    file:'js'
  },
  {
    language:'Java',
    file:'java'
  },
  {
    language:'Python',
    file:'py'
  }
]

MyCoding.forEach( (item) =>{
  console.log(item.language);

})

/*
<<<<<OUTPUT>>>>>

JavaScript
Java
Python

*/



//............................

MyCoding.forEach( (item) =>{
  console.log(item.file);

})

/*
<<<<<OUTPUT>>>>>

js
java
py

*/
