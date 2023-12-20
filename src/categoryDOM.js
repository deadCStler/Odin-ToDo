import { displayCatgories } from "./noteDOM";


export const categoryList = [];

class Categories {
  constructor(name) {
    this.name = name;
  }
}

function addToHeader(name) {
  let opt = document.querySelector(".options");

  let div = document.createElement("div");
  div.classList.add(`opt_${name}`);
  div.innerHTML = name;

  opt.appendChild(div);

  div.addEventListener("click", () => {
    displayCatgories(div);
  });
}

function addToSideBar(name){
  let ul = document.querySelector(".categories>ul");
  let li = document.createElement('li');
  li.innerHTML=name;
  ul.append(li);
}

function createCategoryDialog() {
  let dialog = document.createElement("dialog");
  dialog.classList.add("categoryModal");

  let form = document.createElement("form");
  form.setAttribute("id", "categoryForm");

  let div1 = document.createElement("div");

  let label = document.createElement("label");
  label.setAttribute("for", "categoryName");
  label.innerHTML = "Enter the name of the category:";

  let input = document.createElement("input");
  input.setAttribute("id", "categoryName");
  input.setAttribute("type", "text");
  input.setAttribute("required", "true");

  let div2 = document.createElement("div");

  let closeButton = document.createElement("button");
  closeButton.innerHTML = "Close";
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  let submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";

  div1.appendChild(label);
  div1.appendChild(input);
  div2.appendChild(submitButton);
  div2.appendChild(closeButton);

  form.appendChild(div1);
  form.appendChild(div2);

  dialog.appendChild(form);

  return dialog;
}

function createCategory(input) {
  let category = new Categories(input);
  categoryList.push(category);
  addToHeader(input);
  addToSideBar(input);
}

export const newCategory = function () {
  const categories = document.querySelector(".categories");
  const dialog = createCategoryDialog();
  categories.appendChild(dialog);

  dialog.showModal();
  dialog.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#categoryName").value;
    createCategory(input);
    dialog.close();
    categories.removeChild(dialog);
  });
};
