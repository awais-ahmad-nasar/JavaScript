const coding=["Js","Ruby","java","python","c++","R","c#"]
const values=coding.forEach( (item)=>{
  console.log(item);
})
console.log(values);   // undefined : foreach never return anything


const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=[]
myNums.forEach((num)=>{
  if (num>4){
    newNums.push(num)
  }
})
console.log(newNums);    // [ 5, 6, 7, 8, 9, 10 ]

// *****************************************************************************************************************
// *************************************************** FILTER ***************************************************  
//............................................................................................................................................................................

// FILTER func also takes call back i.e () =>{}


const myNums1=[1,2,3,4,5,6,7,8,9,10]
const newNums1 = myNums1.filter( (num) => num > 4)
console.log(newNums1);    // [ 5, 6, 7, 8, 9, 10 ]


//............................................................................................................................................................................

const myNums2=[1,2,3,4,5,6,7,8,9,10]
const newNums2 = myNums2.filter( (num) => {
  num>4

})
console.log(newNums2);    // []    :> in this if we start scope {} then we must write return 


//............................................................................................................................................................................

const myNums3=[1,2,3,4,5,6,7,8,9,10]
const newNums3 = myNums3.filter( (num) => {
  return num>4

})
console.log(newNums3);    // [ 5, 6, 7, 8, 9, 10 ]





//............................................................................................................................................................................


const books = [
  { title: "Book 1", genre: "Fiction", publish: 2000, edition: 1 },
  { title: "Book 2", genre: "Science", publish: 1980, edition: 2 },
  { title: "Book 3", genre: "History", publish: 1981, edition: 3 },
  { title: "Book 4", genre: "Fiction", publish: 1982, edition: 4 },
  { title: "Book 5", genre: "Science", publish: 2001, edition: 5 },
  { title: "Book 6", genre: "Fiction", publish: 1984, edition: 1 },
  { title: "Book 7", genre: "History", publish: 1985, edition: 3 },
  { title: "Book 8", genre: "Science", publish: 1986, edition: 4 },
  { title: "Book 9", genre: "Fiction", publish: 2002, edition: 5 },
  { title: "Book 10", genre: "Fiction", publish: 2000, edition: 2 },
  { title: "Book 11", genre: "Fiction", publish: 1989, edition: 1 },
  { title: "Book 12", genre: "Fiction", publish: 1990, edition: 2 },
  { title: "Book 13", genre: "History", publish: 2000, edition: 1 },
  { title: "Book 14", genre: "Science", publish: 2005, edition: 4 },
  { title: "Book 15", genre: "Science", publish: 1993, edition: 5 },
  { title: "Book 16", genre: "Fiction", publish: 2006, edition: 4 },
  { title: "Book 17", genre: "History", publish: 1995, edition: 1 },
  { title: "Book 18", genre: "Science", publish: 2003, edition: 5 }
];

const Userbooks1 = books.filter((bk)=> bk.genre==='Fiction')
console.log(Userbooks1);


/*
>>>>>>>OUTPUT<<<<<<<

[
  { title: 'Book 1', genre: 'Fiction', publish: 2000, edition: 1 },
  { title: 'Book 4', genre: 'Fiction', publish: 1982, edition: 4 },
  { title: 'Book 6', genre: 'Fiction', publish: 1984, edition: 1 },
  { title: 'Book 9', genre: 'Fiction', publish: 2002, edition: 5 },
  { title: 'Book 10', genre: 'Fiction', publish: 2000, edition: 2 },
  { title: 'Book 11', genre: 'Fiction', publish: 1989, edition: 1 },
  { title: 'Book 12', genre: 'Fiction', publish: 1990, edition: 2 },
  { title: 'Book 16', genre: 'Fiction', publish: 2006, edition: 4 }
]

*/

//............................................................................................................................................................................

const Userbooks2 = books.filter((bk)=> {return bk.publish>=2000})
console.log(Userbooks2);

/*
>>>>>>>OUTPUT<<<<<<<

[
  { title: 'Book 1', genre: 'Fiction', publish: 2000, edition: 1 },
  { title: 'Book 5', genre: 'Science', publish: 2001, edition: 5 },
  { title: 'Book 9', genre: 'Fiction', publish: 2002, edition: 5 },
  { title: 'Book 10', genre: 'Fiction', publish: 2000, edition: 2 },
  { title: 'Book 13', genre: 'History', publish: 2000, edition: 1 },
  { title: 'Book 14', genre: 'Science', publish: 2005, edition: 4 },
  { title: 'Book 16', genre: 'Fiction', publish: 2006, edition: 4 },
  { title: 'Book 18', genre: 'Science', publish: 2003, edition: 5 }
]

*/


//............................................................................................................................................................................


const Userbooks3 = books.filter((bk)=> {
  return bk.publish>=2000 && bk.genre==='History'

})
console.log(Userbooks3);

/*
>>>>>>>OUTPUT<<<<<<<

[ 

{ title: 'Book 13', genre: 'History', publish: 2000, edition: 1 } 

]

*/



//************************************************************************************************************
//*************************************************** MAPS ***************************************************  
//............................................................................................................................................................................

const myNums4=[1,2,3,4,5,6,7,8,9,10] 
const newNums4=myNums4.map((num)=>num+10)
console.log(newNums4);

/*
>>>>>>>OUTPUT<<<<<<<

[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]

*/

//............................................................................................................................................................................

const newNums5=myNums4.map((num)=> num*10).map((num)=> num+1)
console.log(newNums5);

/*
>>>>>>>OUTPUT<<<<<<<

[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/


//............................................................................................................................................................................

const newNums6=myNums4
              .map((num)=> num*10)
              .map((num)=> num+1)
              .filter((num) => num>=50)
console.log(newNums6);

/*
>>>>>>>OUTPUT<<<<<<<

[ 51, 61, 71, 81, 91, 101 ]

*/


// ************************************************************************************************************
// *************************************************** REDUCE ***************************************************  
//............................................................................................................................................................................

const array1=[1,2,3,4]
const initialValue=0

const sumWithInital = array1.reduce(
  (accumulator,currentValue)=> accumulator + currentValue , initialValue
)
console.log(sumWithInital);   // 10


//............................................................................................................................................................................

const array2=[1,2,3]
const total1 = array2.reduce( function(acc,curr){
  console.log(`Accumulator : ${acc} ..... CurrentValue : ${curr}`);
  return acc+curr

},0)    
console.log(total1);   

/*
>>>>>>>OUTPUT<<<<<<<

Accumulator : 0 ..... CurrentValue : 1
Accumulator : 1 ..... CurrentValue : 2
Accumulator : 3 ..... CurrentValue : 3
6
*/


//............................................................................................................................................................................

const total2 = array2.reduce( function(acc,curr){
  console.log(`Accumulator : ${acc} ..... CurrentValue : ${curr}`);
  return acc+curr

},3)    
console.log(total2);

/*
>>>>>>>OUTPUT<<<<<<<

Accumulator : 3 ..... CurrentValue : 1
Accumulator : 4 ..... CurrentValue : 2
Accumulator : 6 ..... CurrentValue : 3
9
*/

//............................................................................................................................................................................

const total3 = array2.reduce( (acc,curr)=> acc+curr,0)    
console.log(total3);  // 6


//............................................................................................................................................................................

const shoppingCart = [
  {
    itemName:'JavaScript',
    price:200
  },
  {
    itemName:'Data Science',
    price:800
  },
  {
    itemName:'Mobile App',
    price:980
  },
  {
    itemName:'Python',
    price:300
  },
  {
    itemName:'Java',
    price:100
  }
]

const priceToPay=shoppingCart.reduce((acc,item) => (acc + item.price)  , 0)
console.log(priceToPay);   // 2380