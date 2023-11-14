// script.js

const add = (a, b) => a + b;
// if we leave  a + b in {} we have to use return
const multiply = (a, b) => a * b;

const internal = function () {
  const added = add(this.internal.a, this.internal.b);
  const multiplied = multiply(this.internal.a, this.internal.b);
  console.log(added);
  console.log(multiplied);
  return this;
};

console.log(internal);

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();

/* If internal is intended to be used within an object method and you expect this to refer to the object, 
then using an arrow function might not be suitable. In such cases, you might want
 to stick with a regular function expression. 
 arrow functions don't have their own this binding; instead, they inherit the 
 this value from the enclosing scope. In this case, if this code is used within 
 an object method, it might not behave as expected. */
