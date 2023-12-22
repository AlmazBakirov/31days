const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  document.querySelector("a").style.color = hexColor;
  document.querySelector("h4").style.color = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}