// let customers = 1;
// let location = "RSA";
// let currency = "$";
// let shipping = 0;

// const FREE_WARNING = "Free shipping only applies to single customer orders";
// const BANNED_WARNING =
//   "Unfortunately we do not ship to your country of residence";
// const NONE_SELECTED = "0";

// if (location === RSA) {
//   shipping = 400;
//   currency === "R";
// } else if (location === "NAM") shipping = 600;
// else shipping = 800;

// const shoes = 300 * 1;
// const toys = 100 * 5;
// const shirts = 150 * NONE_SELECTED;
// const batteries = 35 * 2;
// const pens = 5 * NONE_SELECTED;

// const totalCart = shoes + batteries + pens + shirts + toys;

// let condition;
// if (location === "RSA") condition = totalCart > 1000;
// else condition = totalCart > 60;

// if (condition) {
//   shipping = 0;
// }

// if (shipping === 0 && customers !== 1) console.log(FREE_WARNING);

// location === "NK"
//   ? console.log(BANNED_WARNING)
//   : console.log("price", currency, totalCart + shipping);

FREE_WARNING = "Free shipping only applies to single customer orders";
BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
NONE_SELECTED = 0;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;
let customers = "1"; // Had to declare these as given in the brief
const location = "RSA";
let shipping = null;
let currency = "$";

let totalCart = shoes + toys + shirts + batteries + pens;
console.log(totalCart);

if (location === "RSA") {
  shipping = 400;
  currency = "R";
} else if (location === "NAM") {
  shipping = 600;
} else {
  shipping = 800;
}

// It looks sketch but you can write it just as is if it's using a ternary operator
// const isLocNK = location === 'NK'
// isLocNK ? do x : do y
// location === "NK" ? console.log(BANNED_WARNING) : console.log(totalCart);

location === "NK"
  ? console.log(WARNING)
  : console.log("price", currency, totalCart + shipping);

if (
  ((location === "RSA" && totalCart > 1000) ||
    (location === "NAM" && totalCart > 60)) &&
  customers === 1
) {
  shipping = 0;
} else {
  shipping = 800; // Finished this
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING); // Warning for if you don't meet the free delivery criteria
}
