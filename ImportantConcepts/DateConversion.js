// ******Date formatter using new Date********

// Format current date to specified format - Feb 24, 2024

const formattedDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

console.log("Formatted date --", formattedDate);
