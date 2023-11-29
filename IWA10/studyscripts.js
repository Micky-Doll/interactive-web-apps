const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

holidays[0].date = new Date(holidays[0].date);
// Ways to log if holiday[futureId] or holiday[futureId].name exists

// console.log(holidays[futureId] || `ID ${futureId} not created yet`);
// console.log(holidays[futureId].name ? holidays[futureId].name : `ID ${futureId} not created yet`);
holidays[futureId]
  ? console.log(holidays[futureId].name)
  : console.log(`ID ${futureId} not created yet`);

let copied = {
  ...holidays[6],
  name: "X-mas",
  date: new Date(`25 December ${currentYear} 00:00`),
};

console.log(copied);

const isEarlier = copied.date < holidays[6].date;
console.log(isEarlier);
console.log("New date is earlier: " + isEarlier);

console.log("ID change:", holidays[6].id === copied.id ? false : true);
console.log(
  "Name change:",
  holidays[6].name === copied.name ? false : copied.name
);
console.log(
  "Date change:",
  holidays[6].date === copied.date
    ? false
    : `${copied.date.getDate()}/${copied.date.getMonth()}/${copied.date.getFullYear()}`
);

console.log(copied.date);

const firstHolidayTimestamp = new Date(
  Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
  )
);

const lastHolidayTimestamp = new Date(
  Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
  )
);
// Function to format any given date, generic version of what is below
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
// console.log(formatDate(lastHolidayTimestamp));

const firstDay = firstHolidayTimestamp.getDate().toString().padStart(2, "0");
const firstMonth = (firstHolidayTimestamp.getMonth() + 1)
  .toString()
  .padStart(2, "0");
const lastDay = lastHolidayTimestamp.getDate();
const lastMonth = lastHolidayTimestamp.getMonth() + 1;

console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

console.log(Object.keys(holidays));

const holidayKeys = Object.keys(holidays);
const randomHolidayKey =
  holidayKeys[Math.floor(Math.random() * holidayKeys.length + 1)];
console.log(formatDate(holidays[randomHolidayKey].date));
