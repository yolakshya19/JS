let button = document.querySelector("#btn1");
// button.onclick = () => {
//   console.log("Externally clicked");
// };

let btn2 = document.querySelector("#btn2");
btn2.onclick = () => {
  console.log("Single click extrenally");
};

let div = document.querySelector("div");
div.onmouseover = () => {
  console.log("You are inside div");
};

// event object
div.onmouseout = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
  console.log("You came outside div");
};

// event listener
// on buttn (btn1)
button.addEventListener("click", () => {
  console.log("Event listener called");
});
