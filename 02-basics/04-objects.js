// const tinderUser=new Object()
// console.log(tinderUser);    // {}


//(non-singleton object) given below
const tinderUser={}
console.log(tinderUser);    // {}

tinderUser.id="123"
tinderUser.name="Awais"
tinderUser.isLoggedIn=false
console.log(tinderUser);




const regularUser={
  email:"awaisbiit4415@gmail.com",
  fullName:{
    userfullname:{
      firstname:"Awais",
      lastname:"Ahmad"
    }

  }
}
console.log(regularUser.fullName);  // { userfullname: { firstname: 'Awais', lastname: 'Ahmad' } }
console.log(regularUser.fullName.userfullname);  // { firstname: 'Awais', lastname: 'Ahmad' }


//..........................................................................................................................


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c ", 4:"d"}
const obj5 = {5:"c ", 6:"d"}


const obj3 = {obj1,obj2}   
console.log(obj3);   
/*
Output obj3 :>  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c ', '4': 'd' } }
*/



const obj4 = Object.assign({},obj1,obj2,obj5)   // {} :> target   &  obj1,obj2,obj5 :> source
console.log(obj4);   // { '1': 'a', '2': 'b', '3': 'c ', '4': 'd', '5': 'c ', '6': 'd' }



//spreading tech is most easy and usefull 
const obj6 = {...obj1,...obj2,...obj5}
console.log(obj6);  // { '1': 'a', '2': 'b', '3': 'c ', '4': 'd', '5': 'c ', '6': 'd' }



//..........................................................................................................................



console.log(tinderUser);

console.log("Keys: ",Object.keys(tinderUser));   // Keys:  [ 'id', 'name', 'isLoggedIn' ]
console.log("Values: ",Object.values(tinderUser));  // Values:  [ '123', 'Awais', false ]
console.log("Entries: ",Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));  // true
console.log(tinderUser.hasOwnProperty('ID'));  // false


