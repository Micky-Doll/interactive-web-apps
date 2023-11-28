const lastName = "McEggson"; //
const firstName = 2;

console.log(firstName);

const egg = {
  firstName: "Eggy", // This is the same as above, just inside of an object {}
  lastName: lastName,
};

// Key-value pairs are the equivalent of defining variables, but inside of
// an object.
// When defining a variable you need =
// When defining a key-value you use :
// How do we make an object? {}
// Only key-values can be inside an object
let breakfast = "";
const power = "on";
const eggs = "yes";
const bread = "unavailable";
const rice = "available";
const pasta = "available";
const bacon = "consume";
const cheese = "dairyfree";

if (power === "on") {
  // curly brackets become "then", if this then that
  if (eggs === "yes") {
    if (bread === "available") {
      breakfast = "Eggs on Toast";
    } else if (rice === "available") {
      breakfast = "Omurice";
    } else if (pasta === "available") {
      if (bacon === "consume") {
        if (cheese === "dairyfree") {
          breakfast = "Carbonara";
        }
      }
    }
  }
} else {
  breakfast = "Cereal";
}

console.log(breakfast);

// Practicing typeof; returns data type of a JS variable

const a = "abc";
const n = 123;
const d = new Date();
const object = {};
const arr = [];

console.log(typeof arr);

/* What is Type Coercion 
   is the automatic or implicit conversion of values from one
   data type to another (such as strings to numbers). 
 */

// Ask later: Why is prototype in eg array.prototype.filter()?

// In JavaScript, the exclamation mark (!) is the logical NOT operator. It is used
// to perform logical negation, which means it reverses the logical state of an expression.

const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Number is the object, isNan is a method that can be applied to the Number object
const primaryValid = !Number.isNaN(parseInt(primaryPhone));
const secondaryValid = !Number.isNaN(parseInt(secondaryPhone));
console.log(typeof NaN);
console.log(primaryValid);
console.log(secondaryValid);
// Number.isNan is checking if primaryPhone is NaN. It is NaN so it returns true.
// By using the ! we say, check if this is NaN, then return false.

//
