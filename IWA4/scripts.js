// const date = 2050;
// const status = "student";
// let count = 0;

// // Use let date in the scope of the if statement
// if (date === 2050) {
//   console.log("January", "New Year’s Day");
//   console.log("March", "Human Rights Day");
//   console.log("April", "Family Day");
//   console.log("April", "Freedom Day");
//   count += 4;

//   if (status === "student") {
//     console.log("June", "Youth Day");
//     count += 1;
//   }

//   console.log("August", "Women’s Day");
//   console.log("September", "Heritage Day");
//   console.log("December", "Day of Reconciliation");
//   count += 3;

//   if (status === "parent") {
//     console.log("December", "Christmas Day");
//     count += 1;
//   }

//   console.log("December", "Day of Goodwill");
//   count += 1;
// }

// console.log("Your status is:", status);
// console.log("The year is:", date);
// console.log("The total holidays are:", count);

const date = 2050;
const status = "parent";
let count = 0;

if (date === 2050) {
  let month = "April";
  count = count + 4;

  if (status === "student") {
    count = count + 1;
  }

  month = "December";
  count = count + 3;

  if (status === "parent") {
    count = count + 1;
  }

  count = count + 1;
}

console.log("Your status is:", status);
console.log("The year is:", date);
console.log("The total holidays is:", count);
