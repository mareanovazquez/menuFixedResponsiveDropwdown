const inicioDropdown = document.getElementById("inicio-dropdown-desktop");
const menuDesplegado = document.getElementById("menuDesplegado");
const inicioDropdownMobile = document.getElementById('inicio-dropdown-mobile');
const menuDesplegadoMobile = document.getElementById('menuDesplegadoMobile');
const seleccionInicio = document.querySelectorAll('.seleccion');

/* FUNCIONES DROPDOWN INICIO DESKTOP */
function deployDropdownInicio() {
    menuDesplegado.classList.add("menuDesplegado");
}
function retractDropdownInicio() {
    menuDesplegado.classList.remove('menuDesplegado');
}

inicioDropdown.addEventListener("mouseover", deployDropdownInicio);
menuDesplegado.addEventListener("mouseleave", retractDropdownInicio);

seleccionInicio.forEach(function(item) {
    item.addEventListener('click', retractDropdownInicio);
});

window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        menuDesplegado.classList.remove('menuDesplegado');
    }
});

/* FUNCIONES DROPDOWN INICIO MOBILE */

function deploySubMenuInicio() {
    menuDesplegadoMobile.classList.toggle('subMenuCeluDesplegado');
}

function retraerSubMenuInicio() {
    let menuToggle = document.getElementById('toggle');
    let menuShow = document.getElementById('menuMobile');

    menuDesplegadoMobile.classList.remove('subMenuCeluDesplegado');
    menuToggle.classList.remove('on');
    menuShow.classList.remove('menuShow');
}

function cerrarMenu(event) {
    let cerrar = event.key;
    if (cerrar == 'Escape') {
        let menuToggle = document.getElementById('toggle');
        let menuShow = document.getElementById('menuMobile');

        menuDesplegadoMobile.classList.remove('subMenuCeluDesplegado');
        menuToggle.classList.remove('on');
        menuShow.classList.remove('menuShow');
    }
}


inicioDropdownMobile.addEventListener("mouseover", deploySubMenuInicio);

// Agrega evento click a los elementos del submenú
const itemsSubmenu = document.querySelectorAll('.itemSubmenuCelu');
itemsSubmenu.forEach(item => {
    item.addEventListener('click', function () {
        cerrarMenu({ key: 'Escape' }); // Llama a cerrarMenu al hacer clic en un elemento del submenú
    });
});

window.addEventListener("keydown", cerrarMenu);

