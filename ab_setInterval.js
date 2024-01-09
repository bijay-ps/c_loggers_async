function displayTime() {
  let now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  console.log(`${hours}:${mins}:${secs}`);
}

// displayTime();

const timeInterval = setInterval(displayTime, 1000);

setTimeout(() => {
  clearInterval(timeInterval);
}, 10000);

// function sayHello() {
//   console.log("Hello, World!");
// }

// const timerId = setTimeout(sayHello, 2000); // Schedule sayHello function to run after 1000 milliseconds (1 second)

// // Now, if you want to cancel the execution of the sayHello function before it runs:
// clearTimeout(timerId);
