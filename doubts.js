let rname = "Pizza party";
function add(a, b) {
  let res = a + b;
  console.log(res);
  if (res > 5) {
    return "True";
  }
  return "False";
}
console.log(rname);
// console.log(res);
// const add = (a, b) => a + b; // here the value of a+b is returned and it will go to line 15

// let a = "jhjk";
// console.log("Line 7: ", a);

let sumResult = add(2, 3); // calling or invoking a function
console.log("Line 9: ", sumResult);

const sumOfTwoNums = (a, b) => {
  const twoTimesA = 2 * a;
  const twoTimesB = 2 * b;
  return twoTimesA * twoTimesB;
};
