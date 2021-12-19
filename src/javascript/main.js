const btnSort = document.querySelector(".cont-sort .tit-sort .btn-sort");
const choiceSort = document.querySelector(".cont-sort .choice-sort");
const titSort = document.querySelector(".cont-sort .tit-sort");

btnSort.addEventListener("click", function () {
  choiceSort.classList.toggle("up");
  titSort.classList.toggle("no-line");
});

const btnSelect = document.querySelector(".cont-select .btn-select");
const listSelect = document.querySelector(".cont-select .list-select");

btnSelect.addEventListener("click", function () {
  listSelect.classList.toggle("active");
});

listSelect.addEventListener("mouseover", function () {
  listSelect.classList.add("active");
});

listSelect.addEventListener("mouseout", function () {
  listSelect.classList.remove("active");
});
