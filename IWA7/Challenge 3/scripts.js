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

const result = `\n${leoName} ${leoSurname.trim()} (Owed: ${leoOwed})\n${sarahName.trim()} ${sarahSurname} (Owed: ${sarahOwed})\n${divider}\nTotal amount owed: ${
  totalOwed.slice(0, 4) + " " + totalOwed.slice(4)
}}\n${divider}`;

console.log(result);

/*
- put variables, expressions, values, into a string - string interpolation
- .trim() removes the extra spaces made after the names in the example text
- \n creates line-breaks
- parseFloat parses decimal values not just whole numbers.
- .toFixed is going to set to how many decimals the value will show.
- -parseFloat negates the negative value
- Why did they put so many spaces after "Sarah"
- parseInt is just going to give NaN on R
- ${} to reference variables properly in template string
- Don't need to use + signs in template literal

- function formatNumberWithSpaceSeparator(number) { return number.toLocaleString("en-US", { useGrouping: false });
 }

 How did they want us to do this?
*/
