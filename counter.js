let decreaseBTN, increaseBTN;
let startnumber = 0;

document.addEventListener("DOMContentLoaded", function () {
  decreaseBTN = document.getElementById("decrease");
  increaseBTN = document.getElementById("increase");
  increaseBTN.addEventListener("click", increase);
  decreaseBTN.addEventListener("click", decrease);
});

function increase() {
  startnumber++;
  updateDom(startnumber);
}

function decrease() {
  startnumber--;
  updateDom(startnumber);
}

function disableEl(el, condition) {
  el.disabled = condition;
}

function updateDom(value) {
  document.getElementById("number").innerHTML = value;
  disableEl(decreaseBTN, startnumber === -10);
  disableEl(increaseBTN, startnumber === 10);
}