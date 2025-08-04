const inicioDropdown = document.getElementById("inicio-dropdown-desktop");
const menuDesplegado = document.getElementById("menuDesplegado");
const inicioDropdownMobile = document.getElementById('inicio-dropdown-mobile');
const menuDesplegadoMobile = document.getElementById('menuDesplegadoMobile');
const seleccionInicio = document.querySelectorAll('.seleccion');

/* FUNCIONES DROPDOWN INICIO DESKTOP CON TRANSICIÓN SUAVE */
let dropdownTimeout;

function deployDropdownInicio() {
    // Limpiar cualquier timeout pendiente
    clearTimeout(dropdownTimeout);
    menuDesplegado.classList.add("menuDesplegado");
}

function retractDropdownInicio() {
    // Agregar un pequeño delay para mejor UX
    dropdownTimeout = setTimeout(() => {
        menuDesplegado.classList.remove('menuDesplegado');
    }, 150);
}

// Eventos para el dropdown desktop
inicioDropdown.addEventListener("mouseenter", deployDropdownInicio);
inicioDropdown.addEventListener("mouseleave", retractDropdownInicio);

// Mantener el dropdown abierto cuando el mouse está sobre él
menuDesplegado.addEventListener("mouseenter", () => {
    clearTimeout(dropdownTimeout);
});
menuDesplegado.addEventListener("mouseleave", retractDropdownInicio);

// Cerrar dropdown al hacer click en una opción
seleccionInicio.forEach(function(item) {
    item.addEventListener('click', () => {
        menuDesplegado.classList.remove('menuDesplegado');
    });
});

// Manejar tecla Escape
window.addEventListener('keydown', (event) => {
    let menuToggle = document.getElementById('toggle');
    let menuShow = document.getElementById('menuMobile');
    let navBarMobile = document.querySelector('.navBarMobile');

    if (event.code === 'Escape') {
        menuDesplegado.classList.remove('menuDesplegado');
        menuDesplegadoMobile.classList.remove('subMenuCeluDesplegado');
        menuToggle.classList.remove('on');
        menuShow.classList.remove('menuShow');
        navBarMobile.classList.remove('menu-open');
    }
});

/* FUNCIONES DROPDOWN INICIO MOBILE - Sin cambios */
function deploySubMenuInicio() {
    menuDesplegadoMobile.classList.toggle('subMenuCeluDesplegado');
}

inicioDropdownMobile.addEventListener("click", deploySubMenuInicio);

// Agrega evento click a los elementos del submenú
const itemsSubmenu = document.querySelectorAll('.itemSubmenuCelu');
itemsSubmenu.forEach(item => {
    item.addEventListener('click', function () {
        let menuToggle = document.getElementById('toggle');
        let menuShow = document.getElementById('menuMobile');
        let navBarMobile = document.querySelector('.navBarMobile');
        
        menuDesplegadoMobile.classList.remove('subMenuCeluDesplegado');
        menuToggle.classList.remove('on');
        menuShow.classList.remove('menuShow');
        navBarMobile.classList.remove('menu-open');
    });
});

// Cerrar dropdown al hacer click fuera de él
document.addEventListener('click', (event) => {
    const isClickInsideDropdown = menuDesplegado.contains(event.target);
    const isClickOnTrigger = inicioDropdown.contains(event.target);
    
    if (!isClickInsideDropdown && !isClickOnTrigger) {
        menuDesplegado.classList.remove('menuDesplegado');
    }
});