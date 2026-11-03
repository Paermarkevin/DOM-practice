let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let totalCount = document.getElementById("totalCount");
let pendingCount = document.getElementById("pendingCount");
let completedCount = document.getElementById("completedCount");

let clearAllBtn = document.getElementById("clearAllBtn");

let filterButtons = document.querySelectorAll(".filter-btn");

// Get tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

// Save tasks in localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Task
function addTask() {
  let taskValue = input.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  let task = {
    id: Date.now(),
    text: taskValue,
    completed: false,
  };

  tasks.push(task);

  input.value = "";

  saveTasks();
  displayTasks();
}

// Display Tasks
function displayTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks.filter(function (task) {
    if (currentFilter === "pending") {
      return !task.completed;
    }

    if (currentFilter === "completed") {
      return task.completed;
    }

    return true;
  });

  if (filteredTasks.length === 0) {
    taskList.innerHTML = '<p class="empty-message">No tasks found!</p>';
  }

  filteredTasks.forEach(function (task) {
    let li = document.createElement("li");

    let span = document.createElement("span");

    span.innerText = task.text;
    span.className = "task-text";

    if (task.completed) {
      span.classList.add("completed");
    }

    // Toggle completed/pending
    span.addEventListener("click", function () {
      task.completed = !task.completed;

      saveTasks();
      displayTasks();
    });

    // Delete button
    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
      tasks = tasks.filter(function (t) {
        return t.id !== task.id;
      });

      saveTasks();
      displayTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });

  updateCounts();
}

// Update Counts
function updateCounts() {
  let total = tasks.length;

  let completed = tasks.filter(function (task) {
    return task.completed;
  }).length;

  let pending = total - completed;

  totalCount.innerText = total;
  completedCount.innerText = completed;
  pendingCount.innerText = pending;
}

// Add button click
addBtn.addEventListener("click", addTask);

// Enter key functionality
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Filter functionality
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    displayTasks();
  });
});

// Clear All Tasks
clearAllBtn.addEventListener("click", function () {
  if (tasks.length === 0) {
    return;
  }

  let confirmDelete = confirm("Delete all tasks?");

  if (confirmDelete) {
    tasks = [];

    saveTasks();
    displayTasks();
  }
});

// Initial display
displayTasks();
