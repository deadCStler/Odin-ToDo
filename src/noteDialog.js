export const createNoteDialog = function (categories) {
    let dialog = document.createElement("dialog");
    dialog.classList.add("noteModal");
  
    let form = document.createElement("form");
    form.setAttribute("id", "noteForm");
  
    let div1 = document.createElement("div");
  
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "titleInput");
    titleLabel.innerHTML = "Enter Title";
  
    let titleInput = document.createElement("input");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("required", "true");
  
    div1.appendChild(titleLabel);
    div1.appendChild(titleInput);
  
    let div2 = document.createElement("div");
  
    let descLabel = document.createElement("label");
    descLabel.setAttribute("for", "descInput");
    descLabel.innerHTML = "Enter Description";
  
    let descInput = document.createElement("textarea");
    descInput.setAttribute("id", "descInput");
    descInput.setAttribute("name", "description");
    descInput.setAttribute("type", "textarea");
    descInput.setAttribute("rows", "7");
    descInput.setAttribute("cols", "50");

  
    let div3 = document.createElement("div");
  
    let categoryLabel = document.createElement("label");
    categoryLabel.setAttribute("for", "Category");
    categoryLabel.innerHTML = "Select the category:";
  
    let selectCategory = document.createElement("select");
    selectCategory.setAttribute("id", "Category");
    selectCategory.setAttribute("name", "category");
    selectCategory.setAttribute("required", "true");
  
    categories.forEach((category) => {
      let option = document.createElement("option");
      option.value = category.name;
      option.text = category.name;
      selectCategory.appendChild(option);
    });
  
    let div4 = document.createElement("div");
  
    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "Priority");
    priorityLabel.innerHTML = "Select the Priority:";
  
    let prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "Priority");
    prioritySelect.setAttribute("name", "priority");
    prioritySelect.setAttribute("required", "true");
  
    let poption1 = document.createElement("option");
    poption1.value = "Low";
    poption1.text = "Low";
  
    let poption2 = document.createElement("option");
    poption2.value = "Medium";
    poption2.text = "Medium";
  
    let poption3 = document.createElement("option");
    poption3.value = "High";
    poption3.text = "High";
  
    prioritySelect.appendChild(poption1);
    prioritySelect.appendChild(poption2);
    prioritySelect.appendChild(poption3);
  
    let div5 = document.createElement("div");
  
    let statusLabel = document.createElement("label");
    statusLabel.setAttribute("for", "Status");
    statusLabel.innerHTML = "Select the Status:";
  
    let statusSelect = document.createElement("select");
    statusSelect.setAttribute("id", "Status");
    statusSelect.setAttribute("name", "status");
    statusSelect.setAttribute("required", "true");
  
    let soption1 = document.createElement("option");
    soption1.value = "YettoStart";
    soption1.text = "Yet to Start";
  
    let soption2 = document.createElement("option");
    soption2.value = "Ongoing";
    soption2.text = "Ongoing";
  
    let soption3 = document.createElement("option");
    soption3.value = "Completed";
    soption3.text = "Completed";
  
    statusSelect.appendChild(soption1);
    statusSelect.appendChild(soption2);
    statusSelect.appendChild(soption3);
  
    let div6 = document.createElement("div");
  
    let dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "dueDate");
    dateLabel.setAttribute("name", "duedate");
    dateLabel.innerHTML = "Select the Date:";
  
    let dateInput = document.createElement("input");
    dateInput.setAttribute("id", "dueDate");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("required", "true");
  
    div1.appendChild(titleLabel);
    div1.appendChild(titleInput);
  
    div2.appendChild(descLabel);
    div2.appendChild(descInput);
  
    div3.appendChild(categoryLabel);
    div3.appendChild(selectCategory);
  
    div4.appendChild(priorityLabel);
    div4.appendChild(prioritySelect);
  
    div5.appendChild(statusLabel);
    div5.appendChild(statusSelect);
  
    div6.appendChild(dateLabel);
    div6.appendChild(dateInput);
  
    let closeButton = document.createElement("button");
    closeButton.innerHTML = "Close";
    closeButton.addEventListener("click", (e) => {
      e.preventDefault();
      dialog.close();
    });
  
    let submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
  
    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div6);
    form.appendChild(submitButton);
    form.appendChild(closeButton);
  
    dialog.appendChild(form);
  
    return dialog;
  }