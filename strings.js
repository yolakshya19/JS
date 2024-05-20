/* Prompt the user to enter their full name. 
Generate a username for them based on the input. 
Start username with @, followed by their full name and ending with the fullname length. */

let userName = prompt("Enter your full name without spaces:");
console.log("@" + userName.toLowerCase() + userName.length);


// String methods
let str = "Hello";
console.log(str.replace("lo", "p"));


let str2 = "Hellolololo";
console.log(str2.replace("lo", "p"));


let str3 = "Hellolololo";
console.log(str2.replaceAll("lo", "p"));