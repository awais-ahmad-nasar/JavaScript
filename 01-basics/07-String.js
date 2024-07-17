const name = "Awais"
const repoCount = 50
console.log(name+ repoCount);


//.............................................
// const name = "Awais"
// const repoCount = 50
console.log(`Hello My name is ${name} & my Repo Count is ${repoCount}`);


//.............................................

const Name=String('Awais is JS Developer')
console.log(Name[0]);    // A
console.log(Name.length);  // 5
console.log(Name.toUpperCase());  //orignal will remain same , it will just show in capital
console.log(Name.startsWith('A'));  // true
console.log(Name.replace('Awais','John'));
console.log(Name.charAt(2));  // a
console.log(Name.indexOf('J'));  // 9
console.log(Name.__proto__);


const Name2=String('Awais is J-S Developer')
const newString1=Name2.substring(0,10)  // start from 0 , end to 10
console.log(newString1);
const newString2=Name2.slice(-22,10)  // start from end index , end to 10 index 
console.log(newString2);


const sentence = "Awais is a name. Awais is also a friend.";
console.log(sentence.replaceAll('Awais', 'John')+"\n"); 


const Name3= "     Awais     "
console.log("Name with spaces :"+Name3);
console.log("Name without spaces :"+Name3.trim());  //remove extra spaces


const Name4=String('Awais is JS Developer . He is very good in making logics')
console.log(Name4.split('.'));


const url="awaisbiit4415-gmail.com"
console.log(url.replace('-','@'));
console.log(url.includes('awais'));  // true

