const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector("button");
const h1El = document.querySelector("h1");

console.log(Math.round(Math.random() * 255));

buttonEl.addEventListener("click", () => {
  const newColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;
  console.log(newColor);
  h1El.textContent = newColor;
  bodyEl.style.backgroundColor = newColor;
});
