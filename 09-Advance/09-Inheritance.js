class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME : ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)     // as previous in 07-Call.js we do >> SetUserName1.call(this ,username) but in classes we don't need this 
        this.email = email
        this.password = password

    }
    addCourse(){
        console.log(`A New course was added by ${this.username}`);
               
    }
}

const teacher1= new Teacher("Dr Hassan","hassan@gmail.com","123")
teacher1.addCourse()   // A New course was added by Dr Hassan

const user1 = new User("Awais")
//user1.addCourse()     // don't have access
user1.logMe()           // USERNAME : Awais

console.log(teacher1 === user1);             // false
console.log(teacher1 === Teacher);           // false
console.log(teacher1 instanceof Teacher);    // true
console.log(user1 instanceof User);          // true 


