const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [9, 7, 8, 6],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: "2022-11-18T20:00:00.000Z",
            time: [10, 8, 3, 12],
          },
          {
            date: "2022-11-25T20:00:00.000Z",
            time: [6, 8, 9, 11],
          },
          {
            date: "2022-12-02T20:00:00.000Z",
            time: [10, 11, 4, 8],
          },
          {
            date: "2022-12-09T20:00:00.000Z",
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const { date, time } = races.reverse()[0];
  console.log(date);
  console.log(races);
  const fragment = document.createDocumentFragment();

  const title = document.createElement("h2");
  title.textContent = id;
  fragment.appendChild(title);

  const list = document.createElement("dl");

  const latestDate = new Date(date);

  const day = latestDate.getDate();
  const month = MONTHS[latestDate.getMonth()];
  const year = latestDate.getFullYear();

  // const month = MONTHS[date.month]; Given a value of a MONTHS array at the index of xyz
  // Object destructuring {} names being referenced are the same
  // Array destructuring [] indexes (numbers) being the same

  const [first, second, third, fourth] = time; // left new/reassignment; right exists (left side - container // right side - contents)
  const total = first + second + third + fourth;

  const hours = Math.floor(total / 60);
  const minutes = total - hours * 60;
  // remember that cost minutes is a visual representation not real 'hours', it's what hours looks like on a digital clock

  list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, "0")} ${minutes
    .toString()
    .padStart(2, "0")}</dd>
    `;

  fragment.appendChild(list);
  return fragment;
};

const NM372 = data.response.data.NM372;
const SV782 = data.response.data.SV782;

document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));

// document = web page = really big object with lots of nesting
// data attribute is another way of doing class or id, except you can name it
