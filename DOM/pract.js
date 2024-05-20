// PRACTICE
// Qs. Create a H2 heading element with text - "Hello JavaScript".
// done in html file

// Append "from Apna College students" to this text using JS.
let heading = document.querySelector("h2");
heading.innerText += " from Apna College students";

// Qs. Create 3 divs with common class name - "box".
// done in html file

// Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box");
// divs[0].innerText += "\n Unique text in div1";
// divs[1].innerText += "\n Unique text in div2";
// divs[2].innerText += "\n Unique text in div3";
//better approach
for (let i = 1; i <= divs.length; i++) {
  divs[i - 1].innerText += "\n Updated text in div " + i;
}

// Qs. Create a new button element.
let newBtn = document.createElement("button");
// Give it a text "click me", background color of red & text color of white.
newBtn.innerText = "Click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
// Insert the button as the first element inside the body tag.
document.querySelector("body").prepend(newBtn);



// Qs. Create a <p> tag in html, give it a class & some styling.
//done in html file

// Now create a new class in CSS and try to append this class to the <p> element.
let para = document.querySelector(".para1");
// para.append(newClass);   newclass not defined error
// para.setAttribute("class", "newClass"); // it overwrites the existing class

// this can be done using classList
para.classList.add("newClass");
// para.classList.remove("para1");