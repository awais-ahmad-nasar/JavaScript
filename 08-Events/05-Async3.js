fetch("http://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Hello World");

/*

> In this above case the output will be,
1st it will show Hello world 
2nd it will show Data on console

.; This is Coz Asynchronously , it moves immediatly to another line 
*/

async function getTodosData() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}
const todos = getTodosData();
console.log(todos);

console.log("Hello World");

/*

Promise { <pending> }
Hello World
[
  { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  .
  .
  .
  .
  .
  .
  .
  {
    userId: 5,
    id: 100,
    title: 'excepturi a et neque qui expedita vel voluptate',
    completed: false
  },
  ... 100 more items
]


*/
