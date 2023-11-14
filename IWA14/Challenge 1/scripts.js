const firstName = "John";
const age = 35;
const hobby = "Coding";

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

function hobbyMessage() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

hobbyMessage();

// parameter needed to be defined, fixed syntax on console.log
// function and variable had the same name
