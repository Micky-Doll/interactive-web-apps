const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

// const owed = parseInt('R' + leoBalance + sarahBalance)
// const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
// const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
// const total = "Total amount owed: "
// const result = leo + sarah + divider + divider + total + owed + divider

// console.log(result)

const leoOwed = `R ${(-parseFloat(leoBalance)).toFixed(2)}`;

const sarahOwed = `R ${(-parseFloat(sarahBalance)).toFixed(2)}`;

const totalOwed = `R ${(
  -parseFloat(leoBalance) - parseFloat(sarahBalance)
).toFixed(2)}`;

const result = `\n${leoName} ${leoSurname} (Owed: ${leoOwed})\n${sarahName} ${sarahSurname} (Owed: ${sarahOwed})\n${divider}\nTotal amount owed: ${totalOwed}\n${divider}`;

console.log(result);

// \n creates line-breaks
// parseFloat parses decimal values not just whole numbers.
// .toFixed is going to set to how many decimals the value will show.
// -parseFloat negates the negative value
// Why did they put so many spaces after "Sarah"
// parseInt is just going to give NaN on R
// ${} to reference variables properly in template string

// .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') - Regex method, manipulate text based on patterns

// function formatNumberWithSpaceSeparator(number) {
//   return number.toLocaleString("en-US", { useGrouping: false });
// }

// How did they want us to do this?
