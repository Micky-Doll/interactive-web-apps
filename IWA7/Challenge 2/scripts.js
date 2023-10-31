const nickname = "Timmy";
const firstname = "Timothy";

// Ternary operator ? is shorthand for if... else statements. Keeps things concise. Requires practice to remember.
// condition ? expressionIfTrue : expressionIfFalse

const message = nickname
  ? `Good Morning, ${nickname}!`
  : firstname
  ? `Good Morning, ${firstname}!`
  : "Good Morning!";
console.log(message);

// && - combines two or more conditions. Both must be true or false.

// if (nickname && firstname) {
//     console.log(`Good Morning, ${nickname}!`);
//   } else if (nickname) {
//     console.log(`Good Morning, ${nickname}!`);
//   } else if (firstname) {
//     console.log(`Good Morning, ${firstname}!`);
//   } else {
//     console.log("Good Morning!");
//  }

// Example by coach:
// `Good Morning${nickname || firstname ? "," : ""}${
//  nickname || firstname || ""}!`
