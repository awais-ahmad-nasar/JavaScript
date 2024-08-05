function SetUserName(username){
    this.username = username
}
function CreateUser(username,email,password){
    SetUserName(username)
    this.email = email
    this.password = password
}

const user = new CreateUser("Awais","awais@gmail.com","123")
console.log(user);  // in this we dont access username

/*
<<<<<<<<<OUTPUT>>>>>>>>>

CreateUser { email: 'awais@gmail.com', password: '123' }

*/



// ............................................................................................................................................................................

function SetUserName1(username){
    this.username = username
}
function CreateUser1(username,email,password){
    SetUserName1.call(this ,username)
    this.email = email
    this.password = password
}

const user1 = new CreateUser1("Awais","awais@gmail.com","123")
console.log(user1);


/*
<<<<<<<<<OUTPUT>>>>>>>>>

CreateUser1 {
    username: 'Awais',
    email: 'awais@gmail.com',
    password: '123'
  }

*/