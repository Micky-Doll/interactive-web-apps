// scripts.js

import { company, year } from "configuration";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;

/* Study Time

 - document. = how you reference the DOM (Document Object Model)
 - querySelector() = selecting an element in the DOM
 - .innertext = Is referencing the text inside of that element
 
 */
