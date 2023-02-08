let showModal = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

console.log(showModal);

for (let index = 0; index < showModal.length; index++) {
  showModal[index].addEventListener("click", showModalpopup);
}

function showModalpopup() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("keyup", clickkeysOnkeyBoard);

function clickkeysOnkeyBoard(event) {
  if (event.key == "Backspace" || event.key == "Escape") {
    closeModal();
  }
}
