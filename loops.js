// LOOPS

// program to print 1 to 5
for (let i = 1; i <= 5; i++){
    console.log(i);
}

//program to print all even numbers from 1 to 100
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/

let gameNum = 20;
let userInput = prompt("Make a guess:");

while (true) {
    let guess = parseInt(userInput);

    if (guess == gameNum) {
        console.log("Your guess was right", userInput);
        break;
    }
    else if (guess > gameNum) {
        console.log("Your guess is higher!!!!");
        userInput = prompt("Make a guess:");
    }
    else {
        console.log("Your guess is lower!!!!");
        userInput = prompt("Make a guess:");
    }
}
