let count = 0;
let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");
let incrementBtn = document.querySelector("#increment-btn");
let decrementBtn = document.querySelector("#decrement-btn");
let saveBtn = document.querySelector("#save-btn");

incrementBtn.addEventListener("click", function () {
    count += 1;
    countEl.textContent = count;
});

decrementBtn.addEventListener("click", function () {
    count -= 1;
    countEl.textContent = count;
});

saveBtn.addEventListener("click", function () {
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
});