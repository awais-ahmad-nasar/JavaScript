let name="Awais"
console.log(name.length);   // 5


//..............................................................................................................................................................

let name1="Awais       "
console.log(name1.truelength);   //  undefined


//..............................................................................................................................................................

let name2="Awais       "
console.log(name1.trim().length);   //  5    : trim removes extra spaces


//..............................................................................................................................................................

let heros = ["thor" , "hulk" , "spiderman"]

let heroPower = {
    thor:"Hammer",
    hulk:"punch",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);

    }
}
Object.prototype.Awais = function(){
    console.log(`Awais is present in all Objects`);
}
heroPower.Awais()    // Awais is present in all Objects
heros.Awais()    // Awais is present in all Objects


//..............................................................................................................................................................

let heros1 = ["thor" , "hulk" , "spiderman"]

let heroPower1 = {
    thor:"Hammer",
    hulk:"punch",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);

    }
}
Array.prototype.Ahmad = function(){
    console.log(`Ahmad say's Hello`);
}
// heroPower1.Ahmad()    // Error : heroPower don't have access to Ahmad 
heros1.Ahmad()   // Ahmad say's Hello



// ....................<<<<<<INHERITANCE>>>>>>....................
const User = {
    name:"Awais",
    email:"awaisbiit441@gmail.com"

}

const Teacher = {
    makeVideo : true
}
const TeachingSupport ={
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User  // Teacher access All user properties called prototype inheritence

// MODERN Way/Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)   // TeachingSupport takes access all properties from Teacher



//..............................................................................................................................................................

let anotherUserName = "AfnanAhmad        " 
String.prototype.TrueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}
anotherUserName.TrueLength()


/*
<<<<<<<OUTPUT>>>>>>>

AfnanAhmad        
True Length is : 10

*/

"Maria".TrueLength()
"IceTea".TrueLength()

/*
<<<<<<<OUTPUT>>>>>>>

Maria
True Length is : 5
IceTea
True Length is : 6

*/