// ******Date formatter using new Date********

// Format current date to specified format -

const formattedDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log("Formatted date --", formattedDate);
