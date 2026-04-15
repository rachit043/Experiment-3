function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;

  // Mark task as completed
  span.onclick = function () {
    span.classList.toggle("completed");
  };

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
