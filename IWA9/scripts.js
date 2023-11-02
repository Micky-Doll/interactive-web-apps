const salary = 4000;
const lodging = "apartment";
const size = "large";

// Only change the syntax below (not the values or key names)

const expenses = {
  food: 51.7501,
  transport: 10.2,
};

const tax = {
  734: "3%",
  234: "20%",
  913: "12%",
  415: "38%",
  502: "42%",
};

const rent = {
  none: 0,
  "small-room": 200,
  "large-room": 300,
  "small-apartment": 400,
  "large-apartment": 800,
  "small-house": 1200,
  "large-house": 2400,
};

// You can change below however you want

const taxPercentage = parseFloat(tax[913]); // Tax is a string; turn a string into a number
const taxDecimal = taxPercentage / 100;

const TaxAmount = salary * taxDecimal; // You got percentage and decimal mixed up, that's why it didn't log

const rentKey = `${lodging}-${size}`;
const rentAmount = rent[rentKey];

const totalExpenses = expenses.transport + expenses.food + rentAmount; // use object properties not (), () calls variable

const finalTotal = salary - TaxAmount - totalExpenses;

console.log(finalTotal.toFixed(2));
