let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winnings = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  count = 0;
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.style.color = "#DE6B48";
      box.innerText = "O";
      turn0 = false;
    } else {
      box.style.color = "#DAEDBD";
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
    count++;
    checkCount(count);
  });
});

const checkWinner = () => {
  for (let pattern of winnings) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("WINNER", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `CONGRATULATIONS!!!! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkCount = (count) => {
  if (count === 9) {
    msg.innerText = `IT'S A DRAW`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
};
