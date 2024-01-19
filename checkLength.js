const quotes = [
  
];

const incorrectLengthIds = [];
let idCheck = false;

quotes.forEach((quote, index) => {
  if (quote.length !== quote.text.length) {
      incorrectLengthIds.push(quote.id);
  }

  if (index > 0 && quote.id !== quotes[index - 1].id + 1) {
    if (!idCheck)
      idCheck = true;
    console.log(`Warning: Ids are not in ascending order. Current id: ${quote.id}, Previous id: ${quotes[index - 1].id}`);
  }
});

if (incorrectLengthIds.length > 0) {
  console.log("Ids with incorrect length:", incorrectLengthIds);
} else {
  console.log("All lengths are correct.");
}

if (!idCheck) {
  console.log("All ids are correct.");
}