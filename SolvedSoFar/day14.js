// N - Number of tiles in the input string

// tiles1 = "11133555" # True. 111 33 555
// tiles2 = "111333555" # False. There are three triples, 111 333 555 but no pair.
// tiles3 = "00000111" # True. 000 00 111. Your pair and a triplet can be of the same value

// # There is also no limit to how many of each tile there is.
// tiles4 = "11122333" # True. Tiles are not guaranteed to be in order
// tiles5 = "11223344555" # False. There cannot be more than one pair
// tiles6 = "99999999" # True. You can have many of one tile
// tiles7 = "999999999" # False.
// tiles8 = "9" # False.
// tiles9 = "99" # True.
// tiles10 = "000022" # False.
// tiles11 = "221" # False. There cannot be any tiles left over.

let tiles1 = "11133555";
let tiles2 = "111333555";
let tiles11 = "221";

const checkOccuranceTrippletAndPair = (str) => {
  if (!str.length) {
    return false;
  }
  let tripplet = 0;
  let pair = 0;
  let currTripWord = str.charAt(0);
  let countTrip = 1;
  let result = "";

  let len = str.length;

  for (let i = 1; i < len; i++) {
    let char = str[i];
    if (currTripWord == str[i]) {
      countTrip++;
    } else {
      result += currTripWord + countTrip + " ";
      if (countTrip % 3 == 0) {
        tripplet++;
      }
      if (countTrip % 2 == 0) {
        pair++;
      }
      currTripWord = str[i];
      countTrip = 1;
    }
  }
  console.log("Triplet ==", tripplet);
  console.log("pair ==", pair);

  if (tripplet >= 1 && pair == 1) {
    return true;
  } else if (!tripplet && pair) {
    return false;
  } else if (tripplet && !pair) {
    return false;
  } else {
    return false;
  }
  // result += currTripWord + countTrip + " "
  //   return result.toString()
};

let result = checkOccuranceTrippletAndPair(tiles11);
console.log("Result ==", result);
