// mostrare / nascondere il menu principale

// 1. cliccando sull'id open-menu il display della classe hamburger-menu deve cambiare da none a block

const hamMenu = document.getElementsByClassName("hamburger-menu")[0];

const btnShow = document.getElementById("open-menu");
btnShow.addEventListener("click", function () {
  hamMenu.style = "display: block";
});
// 2. cliccando sull'id close-menu il display della classe hamburger-menu deve cambiare da block a none
const btnHide = document.getElementById("close-menu");
btnHide.addEventListener("click", function () {
  hamMenu.style = "display: none";
});