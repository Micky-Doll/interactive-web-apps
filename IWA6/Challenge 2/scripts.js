// const rent = 400;
// const tax = "8%";
// const food = 51.7501;
// const salary = 800;
// const transport = 10.2;
// const hourOfDay = 00;
// const minuteOfDay = 00;

// // Only change below this line

// if (hourOfDay === 0 && minuteOfDay === 0) {
//   const taxAsDecimal = parseInt(tax) / 100;
//   const salaryAfterTax = salary - salary * taxAsDecimal;
//   const balance = salaryAfterTax - transport - food - rent;
//   console.log(balance.toFixed(3));
// }

// {
//   const balance = 0;
//   console.log(balance.toFixed(3));
// }

// console.log(balance.toFixed(3));

const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

// Method 1: Nesting if Statements
if (hourOfDay !== undefined && minuteOfDay !== undefined) {
  if (hourOfDay == "00" && minuteOfDay == "00") {
    const taxAsDecimal = parseFloat(tax) / 100;
    const salaryAfterTax = salary - salary * taxAsDecimal;
    const balance = salaryAfterTax - transport - food - rent;
    console.log(balance.toFixed(2));
  }
}
// Remember that return is only for inside functions

// Method 2: Defining parameters to run something means without those
// parameters met it won't run anything
if (hourOfDay == "00" && minuteOfDay == "00") {
  const taxAsDecimal = parseFloat(tax) / 100;
  const salaryAfterTax = salary - salary * taxAsDecimal;
  const balance = salaryAfterTax - transport - food - rent;
  console.log(balance.toFixed(2));
}

// Method 3: One long string of condition
if (
  hourOfDay == "00" &&
  minuteOfDay == "00" &&
  hourOfDay !== undefined &&
  minuteOfDay !== undefined
) {
  const taxAsDecimal = parseFloat(tax) / 100;
  const salaryAfterTax = salary - salary * taxAsDecimal;
  const balance = salaryAfterTax - transport - food - rent;
  console.log(balance.toFixed(2));
}
