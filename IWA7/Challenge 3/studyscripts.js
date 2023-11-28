const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const leo = `${leoName} ${leoSurname.trim()} (Owed: ${(leoBalance * -1).toFixed(
  2
)})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: ${(
  sarahBalance * -1
).toFixed(2)})`;

const totalOwed = (
  parseFloat(leoBalance * -1) + parseFloat(sarahBalance * -1)
).toFixed(2);

const result =
  "\n" +
  leo +
  "\n" +
  sarah +
  "\n \n" +
  divider +
  "\n" +
  "  Total amount owed:  " +
  "R " +
  totalOwed.slice(0, 2) +
  " " +
  totalOwed.slice(2) +
  "  \n" +
  divider;

console.log(totalOwed);
console.log(result);
