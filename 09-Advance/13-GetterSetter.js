class User{
    constructor(email,password)
    {
        this.email = email;
        this.password = password
    }
   
}
const Awais = new User("awaisbiit4415@gmail.com","123")

//console.log(Awais.password);        // 123 

//.....................................................................................................................................

//let suppose if you don't want to give access to anyone

class User1{
    constructor(email,password)
    {
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
   
}
const Awais1 = new User1("awaisbiit4415@gmail.com","abc")
console.log(Awais1.password);    // ABC


//.....................................................................................................................................

class User2{
    constructor(email,password)
    {
        this.email = email;
        this.password = password
    }
    get password(){
        return `${this._password}Awais`
    }
    set password(value){
        this._password = value
    }
   
}
const Awais2 = new User2("awaisbiit4415@gmail.com","abc")
console.log(Awais2.password);    // abcAwais


//.....................................................................................................................................

class User3{
    constructor(email,password)
    {
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Awais`
    }
    set password(value){
        this._password = value
    }
   
}
const Awais3 = new User3("awaisbiit4415@gmail.com","abc")
console.log(Awais3.password);      // abcAwais
console.log(Awais3.email);         // AWAISBIIT4415@GMAIL.COM




//.....................................................................................................................................
//.....................................................................................................................................
//.....................................................................................................................................
//   *********************************** Define/property Based ********************************************** 

function User4(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        
        set : function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get : function(){
            return this._password.toUpperCase()
        },

        set : function(value){
            this._password = value
        }
    })
}
const Awais5 = new User4("awaisbiit4415@gmail.com","awais")
console.log(Awais5.email);     // AWAISBIIT4415@GMAIL.COM
console.log(Awais5.password);   // AWAIS


//.....................................................................................................................................
//.....................................................................................................................................
//.....................................................................................................................................
//   *********************************** Object Based ********************************************** 

const User6 = {
    _email:"afnan@gmail.com",
    _password:"efg",

    get email(){
        return this._email.toUpperCase()
        
    },
    set email(value){
        this._email = value
    }
}
const Awais7 = Object.create(User6)
console.log(Awais7.email);       // AFNAN@GMAIL.COM 
