const returndFunc = add();
returndFunc(15);

function add() {
  let num1 = 5;
  return function (num2) {
    console.log(num1);
    console.log(num2);
    console.log(num1 + num2);
  };
}

// console.log(a);
// let a = 15;
