// whats Object Literals? example given below



const user = {
    username : "Awais Ahmad",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        //console.log("Got User Details");
        //console.log(`UserName : ${this.username}`);        // if we don't use 'this' keyword , then you got Error because 'this' used for execution context/ current context 
        console.log(this);
    }

}
console.log(user.getUserDetails());
/*
<<<<<<<<<Output>>>>>>>>>

> In Function of Object console.log(this);
the given below output gives us current context 
{
  username: 'Awais Ahmad',
  loginCount: 8,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
*/



//.......................................................................................................................................

const promise1= new Promise()   // this 'new' act like constructor function 
const date = new Date()    // this 'new' act like constructor function 

function User(username,loginCount,isLoogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoogedIn = isLoogedIn

    return this
}

const user1 = User("Awais Ahmad",22,true)
const user2=User("Jawad Malik",22,false)
console.log(user1);  // in this user2 override user1 all values 

/*
<<<<<<<OUTPUT>>>>>>
{
  username: 'Jawad Malik',
  loginCount: 22,
  isLoogedIn: false
}
*/



//.......................................................................................................................................


function User2(username,loginCount,isLoogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoogedIn = isLoogedIn

    // return this    // implicitly defined you don't need to write
 }

const user3 = new User2("Awais Ahmad",22,true)
const user4 = new User2("Jawad Malik",22,false)
console.log(user3);  // in this , user2 can't overide by 'new' function
// console.log(user4);  


// /*
// <<<<<<<OUTPUT>>>>>>
//  User2{
// username: 'Awais Ahmad',
//  loginCount: 22, 
//  isLoogedIn: true 
//  }
// */




//.......................................................................................................................................


function User3(username,loginCount,isLoogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoogedIn = isLoogedIn
    this.greeting = function(){
        console.log(`Wellcome ${this.username}`);
    }
}

const user5 = new User3("Awais Ahmad",22,true)
const user6 = new User3("Jawad Malik",22,false)
console.log(user5);  // in this , user2 can't overide by 'new' function
// console.log(user6);  


/*
<<<<<<<OUTPUT>>>>>>
User3 {
  username: 'Awais Ahmad',
  loginCount: 22,
  isLoogedIn: true,
  greeting: [Function (anonymous)]
}
*/




//.......................................................................................................................................


function User4(username,loginCount,isLoogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoogedIn = isLoogedIn
    this.greeting = function(){
        console.log(`Wellcome ${this.username}`);
    }
    
}

const user7 = new User4("Awais Ahmad",22,true)
console.log(user7.constructor);   // [Function: User4]

