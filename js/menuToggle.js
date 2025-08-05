let menuToggle = document.getElementById('toggle');
let menuShow = document.getElementById('menuMobile');
let navBarMobile = document.querySelector('.navBarMobile'); // Seleccionar el navbar mobile

// Seleccionar todos los elementos del menú mobile
let menuItems = document.querySelectorAll('.itemMenuMobile');
let menuItemsRRSS = document.querySelectorAll('.itemMenuRRSS');

function toggleMenu() {
    menuToggle.classList.toggle('on');
    menuShow.classList.toggle('menuShow');

    // Agregar/quitar clase para el box-shadow
    navBarMobile.classList.toggle('menu-open');
}

function closeMenu() {
    menuToggle.classList.remove('on');
    menuShow.classList.remove('menuShow');
    navBarMobile.classList.remove('menu-open');
}

menuToggle.addEventListener('click', toggleMenu);

// Agrega un controlador de eventos a cada elemento del menú para cerrar el menú cuando se hace clic
menuItems.forEach(item => {

    item.addEventListener("click", function (e) {
        if (item.id === "inicio-dropdown-mobile") return;
        closeMenu();
    });
});

menuItemsRRSS.forEach(item => {
    item.addEventListener("click", closeMenu);
});