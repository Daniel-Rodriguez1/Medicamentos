'use strict';

const tbody = document.querySelector('#tbl-medicamentos tbody');
let lista_productos = obtener_productos();



const pintar = () => {
    lista_productos.forEach(element => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = element.codigo;
        fila.insertCell().innerHTML = element.nombre;
        fila.insertCell().innerHTML = element.costo;
        fila.insertCell().innerHTML = element.intravenoso;
        fila.insertCell().innerHTML = element.farmacia;

    });
};
pintar();