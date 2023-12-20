import { checkCategory } from "./categoryDOM";
import { header } from "./bodyHeader";
import { navigation_menu } from "./navigation";
import "./style.css";
import { populateCategoryStorage, populateObjStorage } from "./localStorage";

//create a function for style and display that and remove from other

const code = (function () {
  const content = document.querySelector("#content");

  let body = document.createElement("div");
  body.classList.add("main_body");

  let notesBody = document.createElement("div");
  notesBody.classList.add("notes_body");

  body.appendChild(header());
  body.appendChild(notesBody);

  content.appendChild(navigation_menu());
  content.appendChild(body);

  checkCategory();

  const opt_all = document.querySelector(".opt_all");

  populateObjStorage();
  populateCategoryStorage();
})();
