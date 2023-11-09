let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

// Lots of = in the wrong place.
// Check if this is a string, return an answer. If it is a string make it a number else leave as is.
const logCalc = () => {
  const isString = typeof calculated === "string";
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
  calculated = calculatedAsNumber + 1;
  return calculated; // Return lets us use the updated value outside of the scope of the function.
};

console.log(calculated);

const calcUser = () => {
  logCalc();
  if (calculated > 2) user = "John";
  if (calculated > 2) state = "requesting";
  if (calculated > 3) state = "idle";
};

const checkUser = () => {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
