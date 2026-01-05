const modal = document.getElementById("nameModal");
const greeting = document.querySelector(".username");
const saveBtn = document.getElementById("saveNameBtn");

function saveName() {
  const name = document.getElementById("userNameInput").value.trim();

  if (name === "") return; // prevent empty names

  localStorage.setItem("username", name);
  displayName();
}

function displayName() {
  const savedName = localStorage.getItem("username");

  if (savedName) {
    greeting.textContent = ` ${savedName} 👋`;
    modal.style.display = "none";
  } else {
    modal.style.display = "flex"; // show modal if no name saved
  }
}

saveBtn.addEventListener("click", saveName);

// Run on page load
displayName();

// Time
function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Convert to AM/PM
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // convert 0 → 12

  // Add leading zeros
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  document.getElementById("currentTime").textContent = timeString;
}

setInterval(updateTime, 1000);
// updateTime();

// TODO LIST
const todoInput = document.getElementById("task-input");
const addButton = document.getElementById("addBtn");
const taskList = document.querySelector(".task-list");

addButton.addEventListener("click", addTask);
todoInput.addEventListener("keydown", function (event) {
  // Check if the pressed key is the "Enter" key
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
function addTask() {
  if (todoInput.value.length === 0) {
    alert("Please Enter a Task");
  } else {
    // Create li
    const newItem = document.createElement("li");
    newItem.classList.add("task-item");

    // Create task text
    const taskText = document.createElement("p");
    taskText.textContent = todoInput.value;

    // Create circle icon
    const circleIcon = document.createElement("i");
    circleIcon.classList.add("fa-regular", "fa-circle");

   circleIcon.addEventListener("click", () => {
     circleIcon.classList.toggle("fa-circle");
     circleIcon.classList.toggle("fa-circle-check");
     circleIcon.classList.toggle("fa-regular");
     circleIcon.classList.toggle("fa-solid");

     newItem.classList.toggle("completed-task");
     

   });


    // Create trash (bin) icon
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash");

    // To delete a task with the trash icon
    trashIcon.addEventListener("click", () => {
      newItem.remove();
    });

    // Append everything to li
    newItem.appendChild(circleIcon);
    newItem.appendChild(taskText);
    newItem.appendChild(trashIcon);

    // Append li to ul
    taskList.appendChild(newItem);

    // Clear input
    todoInput.value = "";
  }
}
