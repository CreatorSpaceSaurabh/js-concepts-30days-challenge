// *****Method Overloading JS******
// JS directly doesn't suppport for method overloading, instead we can achieve it using by creating custom method and multiple sub methods, based on condtiion we can handle control execution

// Creating a class  "Student"
class student {
  // Creating an overloadable method/function.
  overloadableFunction() {
    // Define three overloaded functions
    let function1 = function (arg1) {
      console.log("Function1 called - " + "Student name : " + arg1);
      return arg1;
    };

    let function2 = function (arg1, arg2) {
      console.log(
        "Function2 called -" + " Student name : " + arg1 + "Age :" + arg2
      );
      return arg1 + arg2;
    };

    let function3 = function (arg1) {
      let concatenated__arguments = " ",
        temp = " ";

      // Concatenating all the arguments
      // and storing them into a string
      for (let i = 0; i < arg1.length; i++) {
        concatenated__arguments = concatenated__arguments + arg1[i];
      }

      /* Just ignore this loop and temp letiable, 
             we are using this loop to concatenate 
             arguments with a space between them */
      for (let i = 0; i < arg1.length; i++) {
        temp = temp + " " + arg1[i];
      }

      console.log("Function3 called -" + "Student info : [" + temp + "]");
      console.log("Output of log is : ");

      // Returns concatenated argument string
      return concatenated__arguments;
    };

    /* Here with the help of the length of the
         arguments and the type of the argument 
         passed ( in this case an Array ) we 
         determine which function to be executed */
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
      return function3(arguments[0]);
    } else if (arguments.length === 2) {
      return function2(arguments[0], arguments[1]);
    } else if (arguments.length === 1 && !Array.isArray(arguments[0])) {
      return function1(arguments[0]);
    }
  }
}

// Driver Code

// Instantiate an object of the "foo" class
let student1 = new student();

// Call the overloaded functions using the
// function overloadableFunction(...)
// We are passing 1 argument so executes function1
console.log(student1.overloadableFunction("John"));

// We are passing two arguments so executes function2
console.log(student1.overloadableFunction("John, ", "26"));

// We are passing an array so executes function3
console.log(
  student1.overloadableFunction([
    "John, ",
    "Age: 26, ",
    "Email: johndoe@gmail.com",
  ])
);
