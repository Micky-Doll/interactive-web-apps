// scripts.js

// NOTE: When they said the buttons need to be black and greyscale only, they meant the physical block and its outlining.
// The point was for the text to be in the appropriate colours based on STATUS_MAP. *Almost* stepped into that spiral there.
const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

const books = document.querySelectorAll('div[id^="book"]');
// caret operator is used to match elements whose attribute value is specified
// select divs whose id attribute starts with the value 'book'

// Already referencing const books; just getting info from the children not the parent to program the buttons
// empty or underscore is fine, or 'books'
books.forEach(() => {
  const statusElement = book.querySelector(".status");
  const reserveButton = book.querySelector(".reserve");
  const checkoutButton = book.querySelector(".checkout");
  const checkinButton = book.querySelector(".checkin");

  const statusText = statusElement.textContent.trim().replace("Status:", "");
  const statusDisplay = STATUS_MAP[statusText];

  // Updates statusElement colour with statusDisplay info found in STATUS_MAP.
  if (statusDisplay) {
    statusElement.style.color = statusDisplay.color;

    // Set it disabled first then check if it should be enabled. ! (light switch) operator makes it either/or
    // so if canCheckIn is true !canCheckIn will be false or the inverse.
    reserveButton.disabled = !statusDisplay.canReserve;
    checkoutButton.disabled = !statusDisplay.canCheckout;
    checkinButton.disabled = !statusDisplay.canCheckIn;
  }
});

// It's been 40 minutes and the word status has stopped sounding like a word
// Stop. Miss-linking. Your goddamn. JAVASCRIPT.
