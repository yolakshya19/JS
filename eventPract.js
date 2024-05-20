// Create a toggle button and change the mode to dark mode when clicked once and back to light mode when clicked again

let btn = document.querySelector("#toggle");
let body = document.querySelector("body");
let mode = "light";
body.classList.add("light");

btn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    mode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(mode);
});
