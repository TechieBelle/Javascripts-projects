document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  addButton = document.getElementById("add-task-btn");
  taskInput = document.getElementById("task-input");
  taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;

      removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = function () {
        taskList.removeChild(listItem);
      };
      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  // Add an event listener for the DOMContentLoaded event
  document.addEventListener("DOMContentLoaded", addTask);
});

