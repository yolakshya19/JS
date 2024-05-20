let marks = [90, 90, 98, 89, 98];
console.log(marks);

console.log(marks.length); // property

// looping over an array
let prices = [250, 245, 500, 900, 50];
const n = prices.length;
for (let i = 0; i < n; i++) {
  // console.log(`Price of item ${i} is ${prices[i]}`);
  const offer = prices[i] * 0.1;
  console.log(`offer amt on item ${i} = ${offer}`);
  prices[i] -= offer;
  console.log(`Price of item ${i} after offer is ${prices[i]}`);
}

// array methods

// toString()
let arr = [90, 79, 65];

console.log(arr.toString());

// can be stored
let str = arr.toString();
console.log(str[7]);

// concat()

let arr1 = [1, 2, 3];
console.log(arr1);
let arr2 = [4, 5, 7];
console.log(arr2);
let arr3 = [7, 8, 9];
console.log(arr3);
let result = arr1.concat(arr2, arr3);
console.log(result);

// unshift() - add to start
arr1.unshift(0, 10, 48, 45);
console.log(arr1);

//shift() - delete from start nd return
arr2.shift();
console.log(arr2.shift());
console.log(arr2);

// SPLICE()
let arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr4);
arr4.splice(4, 2, "not found");
console.log(arr4);

// Practice
// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
// a. Remove the first company from the array
companies.shift();
console.log(companies);
// b. Remove Uber & Add Ola in its place
companies.splice(1, 1, "Ola");
console.log(companies);
// c. Add Amazon at the end
// console.log(companies.concat("Amazon")); //  wrong way
companies.push("Amazon");
console.log(companies);
