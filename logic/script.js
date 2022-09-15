const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-menu");
burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})