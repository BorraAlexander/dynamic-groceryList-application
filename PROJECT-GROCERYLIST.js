let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");
document.body.appendChild(bgContainer);

let h1El = document.createElement("h1");
h1El.classList.add("heading");
h1El.textContent = "Grocery List";
bgContainer.appendChild(h1El);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainer.appendChild(listContainerEl);

let groceryList = ["Milk", "Bread", "Peanut Butter", "ChacoChips", "Tamoto Sauce", "Cup Nooddles"];

for (let groceryItem of groceryList) {
    let listItem = document.createElement("li");
    listItem.textContent = groceryItem;
    listContainerEl.appendChild(listItem);
}

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "mycheckbox";
checkboxEl.classList.add("input-element");
bgContainer.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Need Home Delivery";
labelEl.setAttribute("for", "mycheckbox");
labelEl.classList.add("label-element");
bgContainer.appendChild(labelEl);

let brEl = document.createElement("br");
bgContainer.appendChild(brEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("button");
buttonEl.textContent = "Proceed To Pay";
bgContainer.appendChild(buttonEl);