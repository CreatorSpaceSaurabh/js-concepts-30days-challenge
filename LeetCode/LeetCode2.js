// ******Question 2 -  Check for prime number in specified range (1, 2^16) **********
// Expected output -
// console.log(isPrime(4)) //false
// console.log(isPrime(1709)) //true

function isPrime(num) {
  const endRange = Math.pow(2, 16);
  if (num >= 1 && num < endRange) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  } else {
    return "Invalid input";
  }
}

function printPrimesInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i + " is prime");
    } else {
      console.log(i + " is not prime");
    }
  }
}

// Define the range (1 to 2^16)
// const startRange = 1;
// const endRange = Math.pow(2, 16);

// Call the function to print primes in the given range
// printPrimesInRange(startRange, endRange);
console.log(isPrime(4)); //false
console.log(isPrime(1709)); //true
