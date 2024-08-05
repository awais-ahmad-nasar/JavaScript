function multiplyby5(num){
    return num*5
}
multiplyby5.power = 2
console.log(multiplyby5(5));    // 25
console.log(multiplyby5.power);   // 2
console.log(multiplyby5.prototype);    // {} : this empty comes coz in function (this.num = num) bydefault has 

//........................................................................................................................................................................................

function createUser(name,score){
    this.name = name
    this.score = score

}
createUser.prototype.increment = function(){
    score++
}
const user1=createUser("Awais",33)
const user2=createUser("Ahmad",45)
console.log(user1);    // undefined
console.log(user2);    // undefined  : in this it don't know which user score should be increments



//........................................................................................................................................................................................

function createUser(name,score){
    this.name = name
    this.score = score

}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`${this.name} is ${this.score}`);
}
const user3= new createUser("chai",33)
const user4=new createUser("coffee",45)
user3.printMe()   // chai is 33
user4.printMe()   // coffee is 45