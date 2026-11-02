const studentName = document.getElementById("studentName");
const studentCourse = document.getElementById("studentCourse");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
const total = document.getElementById("total");
const searchInput = document.getElementById("searchInput");

let students = [];

function displayStudents(studentArray = students) {
  studentList.innerHTML = "";

  studentArray.forEach(function (student) {
    const li = document.createElement("li");

    const info = document.createElement("div");
    info.className = "student-info";

    const name = document.createElement("strong");
    name.textContent = student.name;

    const course = document.createElement("small");
    course.textContent = student.course;

    info.appendChild(name);
    info.appendChild(course);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", function () {
      students = students.filter(function (item) {
        return item.id !== student.id;
      });

      displayStudents();
    });

    li.appendChild(info);
    li.appendChild(deleteBtn);

    studentList.appendChild(li);
  });

  total.textContent = students.length;
}

addBtn.addEventListener("click", function () {
  const name = studentName.value.trim();
  const course = studentCourse.value.trim();

  if (name === "" || course === "") {
    alert("Please enter both name and course!");
    return;
  }

  const student = {
    id: Date.now(),
    name: name,
    course: course,
  };

  students.push(student);

  studentName.value = "";
  studentCourse.value = "";

  displayStudents();
});

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  const filteredStudents = students.filter(function (student) {
    return (
      student.name.toLowerCase().includes(searchText) ||
      student.course.toLowerCase().includes(searchText)
    );
  });

  displayStudents(filteredStudents);
});
