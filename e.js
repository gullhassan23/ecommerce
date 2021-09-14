
let menu = document.getElementById('menu-bar');
// let navbar = document.querySelectorAll('.navbar');
let navbar = document.getElementById('navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
