// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");
const list = document.querySelector("#list");

form.addEventListener("sumbit", (e) => {
  e.preventDefault();
  const newList = document.createElement("li");
  newList.innerHTML = `${quantity.value} ${product.value}`;
  list.appendChild(newList);
  quantity.value = "";
  product.value = "";
});
