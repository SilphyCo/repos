function add7(num) { 
  return num + 7; 
}

function multiply(a, b) { 
  return a * b; 
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function lastLetter(str) {
  return str.slice(-1);
}

// TEST ALL FUNCTIONS
console.log("add7(10):", add7(10));
console.log("multiply(3, 2):", multiply(3, 2));
console.log('capitalize("abcd"):', capitalize("abcd"));
console.log('capitalize("ABCD"):', capitalize("ABCD"));
console.log('capitalize("aBcD"):', capitalize("aBcD"));
console.log('lastLetter("abcd"):', lastLetter("abcd"));