const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

const subtractHandler = () => {
  console.log("Subtract was clicked!");
};

const addHandler = () => {
  console.log("Add was clicked!");
};
subtract.addEventListener("click", subtractHandler);
add.addEventListener("click", addHandler);
