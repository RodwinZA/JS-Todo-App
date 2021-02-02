
const newTask = document.querySelector(".new-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const trashIcon = document.querySelector(".fa-trash");

addTaskBtn.addEventListener("click", () => {
    const todoItems = document.querySelector(".todo-items");
    // Create div element with "single-item" class
    const div = document.createElement("div");
    div.classList.add("single-item");
    // Append div to to main todo-items container
    todoItems.append(div);
    // Create p element that wil contain the value of the input
    const p = document.createElement("p");
    p.innerText = newTask.value;
    // Append p to "single-item" div
    div.append(p);
    // Create edit icon
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa");
    editIcon.classList.add("fa-pencil");
    // Append edit icon to "single-item" div
    div.append(editIcon);
    // Create marked done icon
    const markedDoneIcon = document.createElement("i");
    markedDoneIcon.classList.add("fa");
    markedDoneIcon.classList.add("fa-check-square");
    // Append marked done icon to "single-item"div
    div.append(markedDoneIcon);
    // Create trash icon
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa");
    trashIcon.classList.add("fa-trash");
    // Append trash icon to "single-item" div
    div.append(trashIcon);
    // Clear input
    newTask.value = "";

    // Edit Function

    editIcon.addEventListener("click", () => {
        // Create input element
        const editedInput = document.createElement("input");
        // input.classList.add("new-item");
        editedInput.classList.add("edit-item");
        // Append input to div
        p.parentNode.replaceChild(editedInput, p);
        // Create save icon
        const saveEdit = document.createElement("i");
        saveEdit.classList.add("fa");
        saveEdit.classList.add("fa-floppy-o");
        // Append icon to div
        editIcon.parentNode.replaceChild(saveEdit, editIcon);

        saveEdit.addEventListener("click", () => {
            // Save edited task details
            p.innerText = editedInput.value;
            // Switch from edit mode to display task
            editedInput.parentNode.replaceChild(p, editedInput);
            // switch from save icon back to edit icon
            saveEdit.parentNode.replaceChild(editIcon, saveEdit);
        });
    });


    // Checked Function 

    markedDoneIcon.addEventListener("click", () => {
        p.classList.toggle("checked");
    });


    // Delete Function

    trashIcon.addEventListener("click", () => {
        todoItems.removeChild(div);
    });
});