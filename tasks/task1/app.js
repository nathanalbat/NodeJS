//Task 1
const num = 60;
//a
Number(num % 5 === 0 || num % 2 === 0 || num % 3 === 0) && console.log("1");
//b
Number(
  (num % 2 === 0 && num % 3 === 0) ||
    (num % 3 === 0 && num % 5 === 0) ||
    (num % 2 === 0 && num % 5 === 0)
) && console.log("2");
//c
Number(num % 2 === 0 && num & (3 === 0) && num % 5 === 0) || console.log("3");
