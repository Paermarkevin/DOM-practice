const heading = document.getElementById("myHeading");
const button = document.getElementById("actionBtn");

button.addEventListener("click", function () {
  heading.innerText = "You clicked the button";
  heading.style.color = "#0056b3";
  heading.style.backgroundColor = "#e7f3ff";
  heading.style.padding = "10px";
  heading.style.borderRadius = "5px";
});
