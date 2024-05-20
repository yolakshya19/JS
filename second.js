// program to take input via prompt and check whether number is divisible by 5 or not
let num = prompt("Enter a number!");

if (num % 5 === 0) {
    console.log(num, "is divisible by 5");
}
else {
    console.log(num, "is not divisible by 5");
}