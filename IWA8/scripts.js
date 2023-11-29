// const leoName = "Leo Musvaire";
// const leoNumber = "2";
// const leoStreet = "Church St.";
// const leoPostal = "3105";
// const leoBalance = "-10";

// const sarahName = "Sarah    ";
// const sarahSurname = "Kleinhans";
// const sarahBalance = "-4582.21000111";
// const sarahNumber = "13";
// const sarahStreet = "William Close";
// const sarahPostal = "0310";

// // Only change below this line

// const leo = {
//   name: `${leoName}`,
//   balance: leoBalance,
//   "access id": "47afb389-8014-4d0b-aff3-e40203d2107f",
//   age: 24,
//   address: {
//     number: leoNumber,
//     street: leoStreet,
//     "postal-code": leoPostal,
//   },
// };

// const sarah = {
//   name: `${sarahName} ${sarahSurname}`,
//   age: 62,
//   "access id": "6b279ae5-5657-4240-80e9-23f6b635f7a8",
//   balance: sarahBalance,
//   address: {
//     number: sarahNumber,
//     street: sarahStreet,
//     "postal-code": sarahPostal,
//   },
// };

// console.log(leo, leo.address["postal-code"]);
// console.log(sarah, sarah.address["postal-code"]);

/*
- Camel case is preferred method to deal with invalid special characters i.e accessId and postalCode
- Question: What do you call it when you turn a key name into a string? How does key syntax operate?
- Objects: group related data and functionalities together
- Key (strings/symbols) - value
- Object literals defined using : not = Map key to value
- = for variable assignment : to separate property names from their values
- variables store data properties are values assigned to objects
- Postal-code into a string otherwise invalid key name
- curly brackets to make objects
- STOP FORGETTING COMMAS DEAR GOD
- They deny me my const leoSurname
- leo - points the log at the variable (the big object); leo.address["postal-code"]) points at objects in the parent object
- object.propertyName for no hyphen (no special characters (hyphen, space, starts with a number)) else square brackets 
*/

const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

// Only change below this line

const leo = {
  name: leoName,
  balance: leoBalance,
  accessID: "47afb389-8014-4d0b-aff3-e40203d2107f",
  age: 24,
  address: {
    number: leoNumber,
    street: leoStreet,
    postalCode: leoPostal,
  },
};

const sarah = {
  name: sarahName + sarahSurname,
  age: 62,
  accessID: "6b279ae5-5657-4240-80e9-23f6b635f7a8",
  balance: sarahBalance,
  address: {
    number: sarahNumber,
    street: sarahStreet,
    postalCode: sarahPostal,
  },
};

// When your key is a number/contains a number (in a key-value pair) you can't use dot reference
console.log(leo, leo.address.postalCode);
console.log(sarah, sarah.address.postalCode);

// console.log(leo, leo[address][postal - code]);
// console.log(sarah, sarah[address][postal - code]);
