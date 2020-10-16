'use strict';

const input_sku = document.querySelector('#txt-sku');
const input_nombre = document.querySelector('#txt-nombre');
const input_precio = document.querySelector('#txt-precio');
const input_cantidad = document.querySelector('#txt-cantidad');

const btn_guardar = document.querySelector('#btn-guardar');

const agregar_producto = () => {
    let tienda_json = JSON.parse(localStorage.getItem('tienda_seleccionada'));
    let tienda;
    let producto;
    if (tienda_json.tipo == 'Fisica') {
        tienda = new Tienda_fisica(tienda_json.codigo, tienda_json.nombre, tienda_json.provincia, tienda_json.canton, tienda_json.distrito, tienda_json.horario);

    } else {
        tienda = new Tienda_virtual(tienda_json.codigo, tienda_json.nombre);
    }
    producto = new Producto(input_sku.value, input_nombre.value, Number(input_precio.value), Number(input_cantidad.value));
    tienda.agregar_producto(producto);
    modificar_tiendas(tienda);
    console.log(tienda);
}

btn_guardar.addEventListener('click', agregar_producto);