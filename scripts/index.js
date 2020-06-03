const searchButton = document.querySelector("#page-home main a");
const modal = document.querySelector("#modal");

searchButton.addEventListener("click", () => {
  modal.classList.toggle("hide");
});
