import { categoryStorage } from "./localStorage";
import {
  displayCatgories,
  newNote,
  removeNotefromCategory,
  updateNote,
} from "./noteDOM";
import { createNoteDialog } from "./noteDialog";

let categoryList = [];

class Categories {
  constructor(name) {
    this.name = name;
  }
}

export function checkCategory() {
  const add_new_note = document.querySelector(".new_note");

  add_new_note.addEventListener("click", () => {
    if (categoryList.length == 0) {
      alert("Create a category first");
    } else {
      newNote(categoryList);
    }
  });
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

function removeCategory(name) {
  categoryList = categoryList.filter(function (elem) {
    return elem.name !== name;
  });

  categoryStorage(categoryList);

  let ul = document.querySelector(".categories>ul");
  let elem = document.getElementById(name);
  ul.removeChild(elem);

  let opt = document.querySelector(".options");
  let list = document.querySelectorAll(`.opt_${name}`);
  opt.removeChild(list[0]);

  removeNotefromCategory(name);
}

function addToSideBar(name) {
  let ul = document.querySelector(".categories>ul");
  let li = document.createElement("li");
  li.setAttribute("id", name);
  let idName = `marker_${name}`;
  li.innerHTML = `<div id=${idName}>✗</div>${name}`;
  ul.appendChild(li);
  document.getElementById(idName).addEventListener("click", () => {
    removeCategory(name);
  });
}

function createCategory(input) {
  let category = new Categories(input);
  categoryList.push(category);
  addToHeader(input);
  addToSideBar(input);
  categoryStorage(categoryList);
}

export const newCategory = function () {
  const categories = document.querySelector(".categories");
  const dialog = createCategoryDialog();
  categories.appendChild(dialog);

  dialog.showModal();
  dialog.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#categoryName").value;
    if (input === "" || input.includes(" ") || input.includes("_")) {
      alert(
        "Invalid Input, Enter again and make sure the input name does not contains space or underscore(_)"
      );
      input = "";
      dialog.close();
      dialog.querySelector("form").reset();
    } else {
      createCategory(input);
      dialog.close();
      dialog.querySelector("form").reset();
      categories.removeChild(dialog);
    }
  });
};

export function displayStorageCategory(list) {
  if (list && Array.isArray(list)) {
    list.forEach((item) => {
      categoryList.push(item);
      addToHeader(item.name);
      addToSideBar(item.name);
    });
  }
}

export function showNote(note) {
  const notesBody = document.querySelector(".notes_body");
  const dialog = createNoteDialog(categoryList, note);
  notesBody.appendChild(dialog);
  dialog.showModal();

  dialog.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let myForm = document.forms["noteForm"];
    let date = myForm.elements["dueDate"];
    const formData = new FormData(myForm);
    updateNote(note, formData, date);
    dialog.close();
    notesBody.removeChild(dialog);
  });
}
