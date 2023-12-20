import { categoryList, newCategory } from "./categoryDOM";
import { header } from "./bodyHeader";
import { navigation_menu } from "./navigation";
import "./style.css";
import { displayAll, newNote } from "./noteDOM";

let body = document.createElement("div");
body.classList.add("main_body");

let notesBody = document.createElement("div");
notesBody.classList.add("notes_body");

body.appendChild(header());
body.appendChild(notesBody);

const content = document.querySelector("#content");
content.appendChild(navigation_menu());
content.appendChild(body);

const add_new_category = document.querySelector(".new_category");

add_new_category.addEventListener("click", () => {
  newCategory();
});

const add_new_note = document.querySelector(".new_note");

add_new_note.addEventListener("click", () => {
  if (categoryList.length == 0) {
    alert("Create a category first");
  } else {
    newNote(categoryList);
  }
});

const opt_all = document.querySelector(".opt_all");
opt_all.addEventListener("click", () => {
  displayAll();
});
