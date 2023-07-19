const menuActiv = document.querySelector('.menu_active');
const headerMenu = document.querySelector('.burger');
// const add = document.querySelector('.add');
// const dimming = document.querySelector('.dimming');


function toggleMenu() {
  menuActiv.classList.toggle('hidden');
}

// function addToCart() {
//   add.classList.toggle('hidden_add');
// }

headerMenu.addEventListener('click', toggleMenu);
// dimming.addEventListener('mouseover', addToCart);
// dimming.addEventListener('mouseout', addToCart);