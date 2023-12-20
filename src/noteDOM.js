import { showNote } from "./categoryDOM";
import { removeObj, storageObj } from "./localStorage";
import { createNoteDialog } from "./noteDialog";

let allNotes = [];

let indexCounter = 0;

class Notes {
  constructor(title, desc, duedate, priority, category, status) {
    this.id = indexCounter++;
    this.title = title;
    this.desc = desc;
    this.duedate = duedate;
    this.priority = priority;
    this.category = category;
    this.status = status;
  }
}

function addNotetoBody(note) {
  let notes_body = document.querySelector(".notes_body");
  let div = document.createElement("div");
  div.setAttribute("id", note.id);
  div.classList.add("note");

  let divDate = document.createElement("div");
  divDate.innerHTML = `Due Date: ${note.duedate}`;

  let divTitle = document.createElement("div");
  divTitle.innerHTML = `<p>Title:</p> ${note.title}`;

  let divPriority = document.createElement("div");
  divPriority.innerHTML = `Priority: ${note.priority}`;

  div.appendChild(divDate);
  div.appendChild(divTitle);
  div.appendChild(divPriority);

  notes_body.appendChild(div);

  div.addEventListener("click", () => {
    displayNote(div.getAttribute("id"));
  });
}

export function displayStorage(index, note) {
  if (!allNotes[index]) {
    allNotes[index] = note;
    addNotetoBody(note);
  }
}

function createNote(input, date) {
  const note = new Notes(
    input.get("title"),
    input.get("description"),
    date.value,
    input.get("priority"),
    input.get("category"),
    input.get("status")
  );
  allNotes.push(note);
  addNotetoBody(note);
  storageObj(note);
}

export const newNote = function (categoryList) {
  const notesBody = document.querySelector(".notes_body");
  const dialog = createNoteDialog(categoryList);
  notesBody.appendChild(dialog);

  dialog.showModal();
  dialog.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let myForm = document.forms["noteForm"];
    let date = myForm.elements["dueDate"];
    const formData = new FormData(myForm);
    createNote(formData, date);
    dialog.close();
    dialog.querySelector("form").reset();
    notesBody.removeChild(dialog);
  });
};

function removeFromDom(obj) {
  let notes_body = document.querySelector(".notes_body");

  let notes = document.querySelectorAll(".note");
  notes.forEach(function (elem) {
    if (elem.getAttribute("id") == obj.id) {
      notes_body.removeChild(elem);
    }
  });
}

export function removeNotefromCategory(categoryName) {
  allNotes.forEach(function (elem) {
    if (categoryName === elem.category) {
      removeObj(elem);
      removeFromDom(elem);
    }
  });
  allNotes = allNotes.filter(function (elem) {
    return elem.category !== categoryName;
  });
}

export function removeNote(note) {
  allNotes = allNotes.filter(function (elem) {
    return elem !== note;
  });
  removeObj(note);
  removeFromDom(note);
}

function updateNoteBody(note) {
  let notes_body = document.querySelector(".notes_body");
  const divNote = document.getElementById(note.id);
  notes_body.removeChild(divNote);
  addNotetoBody(note);
}

export function updateNote(note, input, date) {
  note.title = input.get("title");
  note.desc = input.get("description");
  note.category = input.get("category");
  note.duedate = date.value;
  note.priority = input.get("priority");
  note.status = input.get("status");
  updateNoteBody(note);
  storageObj(note);
}

function displayNote(index) {
  showNote(allNotes[index]);
}

function style(div) {
  div.setAttribute("id", "active");
}

export const displayCatgories = function (div) {
  document.querySelectorAll(".options>div").forEach(function (category) {
    category.setAttribute("id", "");
  });

  style(div);
  const category = div.getAttribute("class").split("_")[1];
  let notes_body = document.querySelector(".notes_body");
  notes_body.innerHTML = "";
  allNotes.forEach(function (note) {
    if (note.category === category) {
      addNotetoBody(note);
    }
  });
};

export const displayAll = function () {
  document.querySelectorAll(".options>div").forEach(function (category) {
    category.setAttribute("id", "");
  });

  style(document.getElementsByClassName("opt_all")[0]);
  let notes_body = document.querySelector(".notes_body");
  notes_body.innerHTML = "";
  allNotes.forEach(function (note) {
    addNotetoBody(note);
  });
};
