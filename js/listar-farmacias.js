'use strict';

const tbody = document.querySelector('#tbl-farmacias tbody');
let lista_farmacias = obtener_farmacias();



const pintar = () => {
    lista_farmacias.forEach(element => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = element.codigo;
        fila.insertCell().innerHTML = element.nombre;
        fila.insertCell().innerHTML = element.pais;

        let boton = document.createElement('button');
        boton.type = 'button';
        boton.innerText = 'Ver perfil';
        fila.insertCell().appendChild(boton);

        boton.addEventListener('click', () => {
            localStorage.setItem('farmacia_seleccionada', JSON.stringify(element));
            window.location.href = 'perfil.html';
        });


    });
};
pintar();