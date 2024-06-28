const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const greenBtn = document.getElementById("green");

let blockContainer = document.querySelector(".blocks");

redBtn.addEventListener("click", () => {
  let redBlock = document.createElement("div");
  redBlock.classList.add("red");
  blockContainer.appendChild(redBlock);
});
blueBtn.addEventListener("click", () => {
  let blueBlock = document.createElement("div");
  blueBlock.classList.add("blue");
  blockContainer.appendChild(blueBlock);
});
greenBtn.addEventListener("click", () => {
  let greenBlock = document.createElement("div");
  greenBlock.classList.add("green");
  blockContainer.appendChild(greenBlock);
});
