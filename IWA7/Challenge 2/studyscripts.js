const nickName = "Timmy";
const firstName = "Timothy";

// console.log(`Good Morning, ${nickName || firstName}!`);

if (nickName) {
  console.log(`Good Morning, ${nickName}!`);
} else if (firstName) {
  console.log(`Good Morning, ${firstName}!`);
} else {
  console.log(`Good Morning!`);
}

const message = nickName
  ? console.log(`Good Morning, ${nickName}!`)
  : firstName
  ? console.log(`Good Morning, ${firstName}!`)
  : console.log(`Good Morning!`);
