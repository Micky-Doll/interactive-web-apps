let customers = 1;
let location = "RSA";
let currency = "$";
let shipping = 0;

const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";

if (location === RSA) {
  shipping = 400;
  currency === "R";
} else if (location === "NAM") shipping = 600;
else shipping = 800;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const totalCart = shoes + batteries + pens + shirts + toys;

let condition;
if (location === "RSA") condition = totalCart > 1000;
else condition = totalCart > 60;

if (condition) {
  shipping = 0;
}

if (shipping === 0 && customers !== 1) console.log(FREE_WARNING);

location === "NK"
  ? console.log(BANNED_WARNING)
  : console.log("price", currency, totalCart + shipping);
