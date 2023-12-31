const order1 = document.querySelector('[data-key="order1"]');
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');

// variables can't start with a number, also root doesn't exist to query
// Query every class per div

const biscuits1 = order1.querySelector(".biscuits .count");
const donuts1 = order1.querySelector(".donuts .count");
const pancakes1 = order1.querySelector(".pancakes .count");
const status1 = order1.querySelector(".status dd");

const biscuits2 = order2.querySelector(".biscuits .count");
const donuts2 = order2.querySelector(".donuts .count");
const pancakes2 = order2.querySelector(".pancakes .count");
const status2 = order2.querySelector(".status dd");

const biscuits3 = order3.querySelector(".biscuits .count");
const donuts3 = order3.querySelector(".donuts .count");
const pancakes3 = order3.querySelector(".pancakes .count");
const status3 = order3.querySelector(".status dd");

/*
    dd (description) goes with dt (term), dl (list) Displays the status info.
    Indicates that the dd element contains definitions to the terms in the previous dt elements
    ? for the win \o/ === returns something
    .textContent - used to dynamically update visible text supplied by the HTML element
    It's setting the textContent of the variable HERE not there i.e the text content of pancake3 is going to be whatever data-pancakes is
*/

biscuits1.textContent = order1.getAttribute("data-biscuits");
donuts1.textContent = order1.getAttribute("data-donuts");
pancakes1.textContent = order1.getAttribute("data-pancakes");
status1.textContent =
  order1.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";

biscuits2.textContent = order2.getAttribute("data-biscuits");
donuts2.textContent = order2.getAttribute("data-donuts");
pancakes2.textContent = order2.getAttribute("data-pancakes");
status2.textContent =
  order2.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";

biscuits3.textContent = order3.getAttribute("data-biscuits");
donuts3.textContent = order3.getAttribute("data-donuts");
pancakes3.textContent = order3.getAttribute("data-pancakes");
status3.textContent =
  order3.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";

// LINK YOUR JAVASCRIPT PROPERLY. PLEASE.
// Can also use dataset
