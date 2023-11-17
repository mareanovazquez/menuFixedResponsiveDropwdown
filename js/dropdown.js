const primera = document.getElementById("primera");
const menuDesplegado = document.getElementById("menuDesplegado");
const inicioMenuCelu = document.getElementById('inicioMenuCelu');
const subMenuCelu = document.getElementById('menuCeluDesplegado');

function deployMenuPrimera() {
    menuDesplegado.classList.add("menuDesplegado");
}

function retraerMenuPrimera() {
    menuDesplegado.classList.remove('menuDesplegado');
}

function deploySubMenuInicio() {
    subMenuCelu.classList.toggle('subMenuCeluDesplegado');
}

function retraerSubMenuInicio() {
    let menuToggle = document.getElementById('toggle');
    let menuShow = document.getElementById('menu');

    subMenuCelu.classList.remove('subMenuCeluDesplegado');
    menuToggle.classList.remove('on');
    menuShow.classList.remove('menuShow');
}

function cerrarMenu(event) {
    let cerrar = event.key;
    if (cerrar == 'Escape') {
        let menuToggle = document.getElementById('toggle');
        let menuShow = document.getElementById('menu');

        subMenuCelu.classList.remove('subMenuCeluDesplegado');
        menuToggle.classList.remove('on');
        menuShow.classList.remove('menuShow');
    }
}

primera.addEventListener("mouseover", deployMenuPrimera);
menuDesplegado.addEventListener("mouseleave", retraerMenuPrimera);
inicioMenuCelu.addEventListener("mouseover", deploySubMenuInicio);

// Agrega evento click a los elementos del submenú
const itemsSubmenu = document.querySelectorAll('.itemSubmenuCelu');
itemsSubmenu.forEach(item => {
    item.addEventListener('click', function() {
        cerrarMenu({ key: 'Escape' }); // Llama a cerrarMenu al hacer clic en un elemento del submenú
    });
});

window.addEventListener("keydown", cerrarMenu);
