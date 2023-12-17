// ****Day13 - try catch & finally*****
// Question - What will be the output of this program
const testMethod = () => {
  try {
    throw new Error("Oops error occured !");
  } catch (error) {
    console.log("error --", error);
    return "Inside catch block";
  } finally {
    return "Inside finally block";
  }
};

let res = testMethod();
console.log("Called method - ", res);

// Output :
// error -- Error: Oops error occured !
// Called method -  Inside finally block
