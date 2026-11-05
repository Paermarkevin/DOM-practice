let count = 0;

let countDisplay = document.getElementById("count");

let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");

// Increment
increment.addEventListener("click", function () {
  count++;
  countDisplay.innerText = count;
});

// Decrement
decrement.addEventListener("click", function () {
  count--;
  countDisplay.innerText = count;
});

// Reset
reset.addEventListener("click", function () {
  count = 0;
  countDisplay.innerText = count;
});
