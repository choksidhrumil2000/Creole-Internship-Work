//===================================Async Await===============================================

const getData = async ():Promise<void> => {
    let y:string = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);


async function runProcess():Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    console.log(json)
  }
  
  runProcess();
  