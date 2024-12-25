let btnAdd = document.getElementById("btn-add");
let itemContainer = document.getElementById("items");
btnAdd.addEventListener("click", () => {
  let counter = document.querySelectorAll(".item").length;
  let newItem = document.createElement("li");
  newItem.setAttribute("class", "item");
  newItem.innerText = `Item ${counter + 1}`;
  itemContainer.appendChild(newItem);
});
