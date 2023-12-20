import { createNoteDialog } from "./noteDialog";

const allNotes = [];

class Notes {
  constructor(title, desc, duedate, priority, category, status) {
    this.id = allNotes.length;
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
  divDate.innerHTML = note.duedate;

  let divTitle = document.createElement("div");
  divTitle.innerHTML = note.title;

  div.appendChild(divDate);
  div.appendChild(divTitle);

  notes_body.appendChild(div);

  div.addEventListener("click", () => {
    displayNote(div.getAttribute("id"));
  });
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
    notesBody.removeChild(dialog);
  });
};

function displayNote(index) {
  const notesBody = document.querySelector(".notes_body");

  let dialog = document.createElement("dialog");

  let title = document.createElement("div");
  title.innerHTML = `<p>Title:</p><div>${allNotes[index].title}</div>`;

  let desc = document.createElement("div");
  desc.innerHTML = `<p>Description:</p><div>${allNotes[index].desc}</div>`;

  let status = document.createElement("div");
  status.innerHTML = `<p>Status:</p><div>${allNotes[index].status}</div>`;

  let dueDate = document.createElement("div");
  dueDate.innerHTML = `<p>Due Date:</p><div>${allNotes[index].duedate}</div>`;

  let priority = document.createElement("div");
  priority.innerHTML = `<p>Priority:</p><div>${allNotes[index].priority}</div>`;

  let category = document.createElement("div");
  category.innerHTML = `<p>Category:</p><div>${allNotes[index].category}</div>`;

  let closeButton = document.createElement("button");
  closeButton.innerHTML = "Close";
  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });

  dialog.appendChild(dueDate);
  dialog.appendChild(title);
  dialog.appendChild(desc);
  dialog.appendChild(category);
  dialog.appendChild(priority);
  dialog.appendChild(status);
  dialog.appendChild(closeButton);

  notesBody.appendChild(dialog);

  dialog.showModal();
}

export const displayCatgories = function (div) {
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
  let notes_body = document.querySelector(".notes_body");
  notes_body.innerHTML = "";
  allNotes.forEach(function (note) {
    addNotetoBody(note);
  });
};
