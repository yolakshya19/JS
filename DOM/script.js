// accessing elements via Id
let header = document.getElementById("heading");
console.log(header);
console.dir(header);

// accessing elements via Class
let para = document.getElementsByClassName("myClass");
console.log(para);
console.dir(para);

// accessing elements via Tag
let buttons = document.getElementsByTagName("button");
console.log(buttons);
console.dir(buttons);

// accessing via query selector
let button = document.querySelector("button");
console.log(button);
console.dir(button);

let buttonAll = document.querySelectorAll("button");
console.log(buttonAll);
console.dir(buttonAll);

// understanding the concept of nodes(text node, element node) and children(first, last)
let divs = document.querySelector("div");

//attributes
let divs2 = document.querySelector("div");
let attr = divs.getAttribute("class"); // get
divs.setAttribute("class", "newClass"); // set

//style
let Div = document.querySelector(".div2");
Div.style.backgroundColor = "aquamarine";

// inserting elements
// 1. create the element
let bttn1 = document.createElement("button");
let bttn2 = document.createElement("button");
let bttn3 = document.createElement("button");
let bttn4 = document.createElement("button");

bttn1.innerText = "Click me 1!!";
bttn2.innerText = "Click me 2!!";
bttn3.innerText = "Click me 3!!";
bttn4.innerText = "Click me 4!!";
// 2. insert the element
Div.append(bttn1);
Div.prepend(bttn2);
Div.before(bttn3);
Div.after(bttn4);

// delete elements
let heading = document.querySelector("h4");
heading.remove();