const arr = [1, 2, 34, 5, 9, 6];
const sorted = arr.sort((a, b) => a - b);
console.log(arr); // [ 1, 2, 5, 6, 9, 34 ]
console.log(sorted); // [ 1, 2, 5, 6, 9, 34 ]

//.............if we want orignal array (means don't change orinal)....................

const arr1 = [2, 6, 4, 8, 12, 10];
const sorted1 = arr1.slice().sort((a, b) => a - b);
console.log(arr1); // [2, 6, 4, 8, 12, 10]
console.log(sorted1); // [ 2, 4, 6, 8, 10, 12 ]

// ............  Decending Order ............

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sorted2 = arr2.slice().sort((a, b) => b - a);
console.log(arr2); // [1,2,3,4,5,6,7,8,9,10]
console.log(sorted2); // [10,9,8,7,6,5,4,3,2,1]
