let containerEl = document.querySelector(".container");
let modeEl = document.querySelector(".mode");
let iEelment = document.querySelectorAll(".circle i");

modeEl.addEventListener("click", () => {
  modeEl.classList.toggle("active");
  containerEl.classList.toggle("active");
  iEelment.forEach((el) => {
    el.classList.toggle("active");
  });
});
