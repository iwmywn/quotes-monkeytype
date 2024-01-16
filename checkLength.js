const quotes = [
  {
    "text": "example",
    "source": "example",
    "length": 7,
    "id": 1
  }
];

const incorrectLengthIds = [];

quotes.forEach(quote => {
  if (quote.length !== quote.text.length) {
      incorrectLengthIds.push(quote.id);
  }
});

if (incorrectLengthIds.length > 0) {
  console.log("Ids with incorrect length:", incorrectLengthIds);
} else {
  console.log("All lengths are correct.");
}
