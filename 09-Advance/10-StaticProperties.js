class User{

    constructor(username){
        this.username = username
    }

    loggedMe(){
        console.log(`USERNAME is ${this.username}`);   
    }

    createId(){
        return `123`
    }

}
const user = new User("Awais")
//user.createId()                 // nothing will show on console
console.log(user.createId());     // 123



//...........................................................................................................................................

class User{

    constructor(username){
        this.username = username
    }

    loggedMe(){
        console.log(`USERNAME is ${this.username}`);   
    }

    static createId(){
        return `123`
    }

}
const user1 = new User("Awais")
// console.log(user1.createId());    // Error Coz user Can't access this function

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email 
    }
}
const teacher = new Teacher("Ahmad","ahmad@gmail.com")
teacher.loggedMe();                   // USERNAME is Ahmad
console.log(teacher.createId());      // Error Coz user Can't access this function
