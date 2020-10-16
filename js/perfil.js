'use strict';
const tbody2 = document.querySelector('#tbl-medicamentos tbody');
const tbody = document.querySelector('#tbl-tiendas tbody');
let farmacia_seleccionada = [];
let lista_productos = obtener_productos();
if (localStorage.getItem('farmacia_seleccionada')) {
    farmacia_seleccionada = JSON.parse(localStorage.getItem('farmacia_seleccionada'));
};

const pintar = () => {
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = farmacia_seleccionada.codigo;
    fila.insertCell().innerHTML = farmacia_seleccionada.nombre;
    fila.insertCell().innerHTML = farmacia_seleccionada.pais;

    let boton = document.createElement('button');
    boton.type = 'button';
    boton.innerText = 'Regresar';
    fila.insertCell().appendChild(boton);

    boton.addEventListener('click', () => {

        window.location.href = 'farmacias.html';
    });

};
pintar();

const pintar2 = (lista_productos) => {
    lista_productos.forEach(element => {
        let fila = tbody2.insertRow();
        fila.insertCell().innerHTML = element.codigo;
        fila.insertCell().innerHTML = element.nombre;
        fila.insertCell().innerHTML = element.costo;
        fila.insertCell().innerHTML = element.intravenoso;
        fila.insertCell().innerHTML = element.farmacia;

    });
};
const filtrar = () => {
    let filtro = lista_productos.filter((quemado) => quemado.farmacia == farmacia_seleccionada.nombre);
    pintar2(filtro);
};
filtrar();