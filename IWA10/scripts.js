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

/*
 check whether the new date is earlier than the current date, if yes log true else log false
 midnight is before 13:25 so log 'new date is earlier: true' in console
 only if the date is earlier should it change to copied
 user should be alerted to what has changed before they are applied to the holidays object
 if a value has not changed it should log false alternatively log the new value
 log the following: ID change: false, name change: x-mas, date change 25/12/2023
 After fixing the above issue, you should also output the following to the console:
 The first holiday in the year as date, formatted as DD/MM/YYYY . This means that the match (New Years Day) will look something like 01/01/2030 if the year is 2030
 The last holiday in the year as date, formatted as DD/MM/YYYY . This means that the match (Day of Goodwill) will look something like 26/12/2030 if the year is 2030
 A randomly selected holiday date in the same format as above. Note that each time the code runs a new date should be randomly selected.
*/

// Check whether an item has been assigned to the 9 key, if so, log the name of the holiday, if nothing is assigned, log ID 9 not created yet
if (holidays[futureId]) {
  console.log(holidays[futureId].name);
} else {
  console.log(`ID ${futureId} not created yet`);
}

// create a version of the christmas object that has the date set to midnight; change the name of Christmas to X-mas
const copied = { ...holidays[christmas] };
copied.name = "X-mas";
copied.date.setHours(0, 0);

// check whether the date is earlier
const newDateEarlier = copied.date < holidays[christmas].date ? true : false;
console.log("New date is earlier:", newDateEarlier);

//

console.log(holidays.futureId.name || "ID {futureId} not created yet");

copied = holidays.christmas;
copied = { name: "X-mas Day" };
correctDate = copied.date;
correctDate.hours = 0;
correctDate.minutes = 0;
isEarlier = copied.date < holidays[6].date;
console.log("New date is earlier:", isEarlier);
if (isEarlier) copied.date = correctDate;
console.log("ID change:", holidays[christmas].id != copied.id || copied.id);
console.log(
  "Name change:",
  holidays[christmas].name != copied.name || copied.name
);
console.log(
  "Date change:",
  holidays[christmas].date != copied.date || copied.date
);

const firstHolidayTimestamp = Math.min(
  holidays[0].date.getTime,
  holidays[1].date.getTime,
  holidays[2].date.getTime,
  holidays[3].date.getTime,
  holidays[4].date.getTime,
  holidays[5].date.getTime,
  holidays[6].date.getTime,
  holidays[7].date.getTime,
  holidays[8].date.getTime
);

const lastHolidayTimestamp = Math.max(
  holidays[0].date.getTime,
  holidays[1].date.getTime,
  holidays[2].date.getTime,
  holidays[3].date.getTime,
  holidays[4].date.getTime,
  holidays[5].date.getTime,
  holidays[6].date.getTime,
  holidays[7].date.getTime,
  holidays[8].date.getTime
);

const firstDay = firstHolidayTimestamp.getDate;
const firstMonth = firstHolidayTimestamp.getMonth;
const lastDay = lastHolidayTimestamp.getDate;
const lastMonth = lastHolidayTimestamp.getMonth;

console.log("{firstDay}/{firstMonth}/{currentYear}");
console.log("{lastDay}/{lastMonth}/{currentYear}");

const randomHoliday = holidays[Math.random];
console.log(randomHoliday.date);
