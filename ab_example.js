// Problem
// function task(message) {
//     // emulate time consuming task
//     let n = 10000000000;
//     while (n > 0){
//         n--;
//     }
//     console.log(message);
// }

// console.log('Start script...');
// task('Call an API');
// console.log('Done!');

// Solution

// Function with a callback
function task(message) {
  // emulate time consuming task
  let n = 100000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}

// console.log("Start script...");

// setTimeout(() => {
//   task("Call an API");
// }, 1000); // 1 sec = 1000 ms

// console.log("Done!");

function sayHello(name, message) {
  console.log(`Hello, ${name}! ${message}`);
}

setTimeout(sayHello, 3000, "Danish", "How are you?");
