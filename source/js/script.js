var toggle = document.querySelector(".js-hamburger");
var openMenu = document.querySelector(".site-list--noactive")

toggle.addEventListener("click", function() {
  this.classList.toggle("is-active");
  openMenu.classList.toggle("site-list--active");
});


