/*
>>>> promise is it's self an object.
>>>> Promise is in one of these states , 
  1) pending : initial state , neither fulfilled nor rejected.
  2) fulfilled : means that the operation was completed successfully.
  3) rejected : means that the operation failed.
*/

//.........................................................................................................................................................................................................
const promise1= new Promise(function(reject,resolve){
    // now you can doing any tasks , 
    // i.e Async tasks , D.B calls , cryptography , network 
    setTimeout(function () {
      console.log('Async task is complete'); 
      
    },1000)
});
promise1.then(function(){     // then ka connection resolve ka sath hota 
    console.log("Promise 1 Consumed");
});  

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

Async task is complete

*/


//.........................................................................................................................................................................................................
const promise2= new Promise(function(resolve,reject){
    setTimeout(function () {
      console.log('Async task is complete'); 
      resolve()
    },1000)
});
promise2.then(function(){     // then ka connection resolve ka sath hota 
    console.log("Promise 1 Consumed");
});   

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

Async task is complete
Promise 1 Consumed

*/

//.........................................................................................................................................................................................................
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },2000)

}).then(function () {

    console.log("Async 2 Resolved");    

});

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

Async task 2
Async 2 Resolved

*/


//.........................................................................................................................................................................................................
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Awais Ahmad" ,email : "awaisbiit4415@gmail.com" });
    },1000)
    
})
promise3.then(function(user){
    console.log(user);
})

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

{ username: 'Awais Ahmad', email: 'awaisbiit4415@gmail.com' }

*/



//.........................................................................................................................................................................................................
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({name:"Khan" , password:"123"})
        }else{
            reject('ERROR something went Wrong')
        }
    },1000)
    
});
promise4.then((user) => {
    console.log(user);
    return user.name

}).then((name)=>{          // this again use of '.then' is chaining COZ oper waly '.then' se jo return aye ga wo new '.then' ma aaa jae ga 
    console.log(name);
}).catch(function(Error){
    console.log(Error);
})

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

ERROR something went Wrong

*/




//.........................................................................................................................................................................................................
const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({name:"Khan" , password:"123"})
        }else{
            reject('ERROR something went Wrong')
        }
    },1000)
    
});
promise5.then((user) => {
    console.log(user);
    return user.name

}).then((name)=>{          
    console.log(name);
}).catch(function(Error){
    console.log(Error);
})

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

{ name: 'Khan', password: '123' }
Khan

*/


//.........................................................................................................................................................................................................
const promise6= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({name:"Khan" , password:"123"})
        }else{
            reject('ERROR something went Wrong')
        }
    },1000)
    
});
promise6.then((user) => {
    console.log(user);
    return user.name

}).then((name)=>{          
    console.log(name);
}).finally(()=>{
    console.log("The promise is either Resolved or Rejected");
})

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

The promise is either Resolved or Rejected

*/



//.........................................................................................................................................................................................................
//.........................................................................................................................................................................................................
//.........................................................................................................................................................................................................
const promise7= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false 
        if (!error){
            resolve({username:"Jamshed" , password:"12345"})
        }else{
            reject('ERROR : JS went Wrong')
        }
    },1000)
    
});
async function ConsumePromise(){
    const response = await promise7       // this promise7 is actually an object
    console.log(response);
}
ConsumePromise()

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

{ username: 'Jamshed', password: '12345' }

*/


//.........................................................................................................................................................................................................
const promise8= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if (!error){
            resolve({username:"Jamshed" , password:"12345"})
        }else{
            reject('ERROR : JS went Wrong')
        }
    },1000)
    
});
async function ConsumePromise(){
    try {
        const response = await promise8       
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
};
ConsumePromise()

/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

ERROR : JS went Wrong

*/


//.........................................................................................................................................................................................................

async function getallUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response);
        const data = await response.json() 
        console.log(data);
        
    } catch (error) {
        console.log("E : " ,error);
        
    }

}
getallUsers()


/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

[
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: [Object]
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: [Object]
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      }
    },

*/



//........OR..........

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))


/*
<<<<<<<<<<<<OUTPUT>>>>>>>>>>

[
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: [Object]
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: [Object]
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      }
    },

*/