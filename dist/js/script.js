// navbar fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixnav = header.offsetTop;

  if (window.pageYOffset > fixnav) {
    header.classList.add("navbarfix");
  } else {
    header.classList.remove("navbarfix");
  }
};

// / hamburger

const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#navmenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-aktif");
  navmenu.classList.toggle("hidden");
});
