/*

.>In J.S during applying copy operation then it creates ,
    1) Shallow copy :
          .. S.C of an obj is a copy whose properties share the same
             references points(point to the same underlying values) as those 
             of the source obj from which copy was made. 

    2) Deep copy : 
          .. D.C of an obj is a copy whose properties don't share same 
             references point .


*/

const arr=[0,1,2,3,4,5,"Awais",true,5.5]
console.log(arr[6]);
const myHeros = ["Hulk","SuperMan","Batman","IronMan"]
const arr2=new Array(1,2,3,4,5)

//................Array Methods.............


// .1)
console.log(arr); 
arr.push(6)
console.log(arr);
arr.pop()     // at last index it will simply remove element
console.log(arr);

// .2)
arr.unshift(9)
console.log(arr);    // [ 9, 0, 1, 2, 3, 4, 5, 'Awais', true, 5.5 ]
arr.shift()  // act like pop but remove 1st element
console.log(arr);    // [0, 1, 2, 3, 4, 5, 'Awais', true, 5.5 ]

// .3)
console.log(arr.includes(1)); // if element 1 is present then > return true
console.log(arr.includes('Awais'));   // true
console.log(arr.includes(9));    // false


// .5)
newarry1=arr.concat(arr2); 
console.log(newarry1);

newarry2=arr.concat(myHeros); 
console.log(newarry2);



// .6)
const newarry3=arr.join()
console.log(newarry3);  // 0,1,2,3,4,5,Awais,true,5.5
console.log(typeof newarry3);  // after join array change into string


// .7)
console.log("orignal: ",arr);

const newayyy4=arr.slice(1,6)
console.log(newayyy4);  // [ 1, 2, 3, 4, 5 ]
console.log("after slice my array : ",arr);

const newayyy5=arr.splice(1,6)
console.log(newayyy5);  // [ 1, 2, 3, 4, 5, 'Awais' ]
console.log("after splice my array : ",arr);  // [ 0, true, 5.5 ]



