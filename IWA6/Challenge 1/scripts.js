// const primaryPhone = "O748105141";
// const secondaryPhone = "0219131568";

// // Only change below this line

// const primaryValid = !Number.isNaN(parseInt(primaryPhone));
// const secondaryValid = !Number.isNaN(parseInt(secondaryPhone));

// console.log("Primary phone is valid numerical string:", primaryValid);
// console.log("Secondary phone is valid numerical string:", secondaryValid);

const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

// Number is the object, isNan is a method that can be applied to the Number object
const primaryValid = !Number.isNaN(parseInt(primaryPhone));
const secondaryValid = !Number.isNaN(parseInt(secondaryPhone));
console.log(typeof NaN);
console.log(primaryValid);
console.log(secondaryValid);
// Number.isNan is checking if primaryPhone is NaN. It is NaN so it returns true.
// By using the ! we say, check if this is NaN, then return false.

// !Number.isNaN - the ! asks "is this not xyz" (reverses the boolean answers)

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);
