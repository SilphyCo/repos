// Get number from user
let maxNumber = parseInt(prompt("Enter a number for FizzBuzz:"));

// Loop from 1 to user's number
for (let i = 1; i <= maxNumber; i++) {
  // Check conditions
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}