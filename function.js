function myFunc() {
  console.log("My first JS Function");
}

myFunc();

// arrow functions
const doSum = (a, b) => {
  return a + b;
};

console.log(doSum);
console.log(doSum(487, 77));

// practice
// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function vowelsCount(str) {
  count = 0;
  str2 = str.toLowerCase();
  for (let ch of str2) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      count++;
    }
  }
  return count;
}

let res = vowelsCount("aeioAEIOUSuaeiou");
console.log(res);

// Qs. Create an arrow function to perform the same task.
const countVowel = (str) => {
  count = 0;
  str2 = str.toLowerCase();
  for (let ch of str2) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      count++;
    }
  }
  return count;
};

console.log(countVowel);
console.log(countVowel("tfrtsewAedSFCG"));
console.log(" ");

// forEach() loop for arrays
let arr = [1, 2, 3];
arr.forEach(function printVal(val) {
  // here i gave a complete function definition
  console.log(val);
});

// we usually use arrow functions in forEach()
arr.forEach((val) => {
  console.log(val + 10);
});

// one more way to pass callback functions
let printCube = (val) => {
  console.log("cube is ", val * val * val);
};
arr.forEach(printCube);

// PRACTICE
// Qs. For a given array of numbers, print the square of each value using the forEach loop.
arr.forEach((val) => {
  console.log(`square of ${val} is ${val * val}`);
});

// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
let marks = [87, 94, 92, 100, 74];
let result = marks.filter((val) => {
  return val > 90;
});
console.log("Marks greater than 90", result);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
let n = prompt("Enter the value of n");
let array = [];
for (let i = 1; i <= n; i++) {
  array[i - 1] = i;
}
console.log(array);

// Use the reduce method to calculate sum of all numbers in the array.
let arraySum = array.reduce((result, curr) => {
  return result + curr;
});
console.log(arraySum);

// Use the reduce method to calculate product of all numbers in the array.
let arrayProd = array.reduce((result, curr) => {
  return result * curr;
});
console.log(arrayProd);
