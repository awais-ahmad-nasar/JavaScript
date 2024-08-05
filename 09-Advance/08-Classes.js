class User11{

    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    EncryptPassword(){
        return `${this.password}abc`
    }

}
const user1 = new User11("Awais","awais@gmail.com","123")
console.log(user1);      // User { username: 'Awais', email: 'awais@gmail.com', password: '123' }
console.log(user1.EncryptPassword());    // 123abc

//....................................................................................................................................................................................................

class User12{

    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    EncryptPassword(){
        return `${this.password}abc`
    }
    ChangeUserName(){
        return `${this.username.toUpperCase()}`
    }

}
const user2 = new User12("Awais","awais@gmail.com","123")      

console.log(user2.ChangeUserName());    // AWAIS




//.............................................OR.......................................................................................................................................................
// Behind the scene

function User3(username,email,password){
    this.username = username
    this.email = email
    this.password = password   
}
User3.prototype.EncryptPassword = function(){
    return `${this.password}abc`
}
User3.prototype.ChangeUserName = function(){
    return `${this.username.toUpperCase()}abc`
}
const user3 = new User3("Awais","awais@gmail.com","123")      

console.log(user3.EncryptPassword());   // 123abc
console.log(user3.ChangeUserName());   // AWAISabc
