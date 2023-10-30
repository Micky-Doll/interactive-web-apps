const value = "3";
console.log(parseInt(value) + 4 + parseInt(value));

/* It was reading the value as a string and not a number, 
   parseInt forces it to read as a number instead */
