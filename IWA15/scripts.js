// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];

const result = [];

const extractBiggest = () => {
  if (
    first[first.length - 1] ||
    0 > second[second.length - 1] ||
    (0 && first[first.length - 1]) ||
    0 > third[third.length - 1] ||
    0
  ) {
    return first.pop();
  }
  if (
    second[second.length - 1] ||
    0 > first[first.length - 1] ||
    (0 && second[second.length - 1]) ||
    0 > third[third.length - 1] ||
    0
  ) {
    return second.pop();
  }
  if (
    third[third.length - 1] ||
    0 > second[second.length - 1] ||
    (0 && third[third.length - 1]) ||
    0 > first[first.length - 1] ||
    0
  ) {
    return first.pop();
  }
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);

/*
const [, first] = data.lists[0];
const second = data.lists[1][1];
const third = data.lists[2][1];

const result = [];

const extractBiggest = () => {
    const newList = [first,second,third];
    const biggest = newList.reduce(
        (acc, current) => {
            if (current[current.length -1] > acc[acc.length -1]) return current;
            return acc;
        },
        [0]
    );
    return biggest.pop();
};
 



 Reduce = Loops through a list, every time it goes through a new value it runs a function on it
