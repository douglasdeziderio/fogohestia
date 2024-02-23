const menu = document.querySelector('#menu');
const menuMenu = document.querySelector('.menu-menu');
let vis = 0;

function aparecerMenu (){
    menuMenu.classList.remove('hidden');
    menu.classList.add('bi-x-lg');
}

function desaparecerMenu (){
    menuMenu.classList.add('hidden');
    menu.classList.remove('bi-x-lg');
}

function alternar (){
    if (vis === 0) {
        aparecerMenu();
        vis = 1;
    } else {
        desaparecerMenu();
        vis = 0;
    }
};

menu.addEventListener('click', alternar);