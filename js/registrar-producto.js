'use strict';

const input_select = document.querySelector('#select');
const input_codigo = document.querySelector('#txt-codigo');
const input_nombre = document.querySelector('#txt-nombre');
const input_costo = document.querySelector('#txt-costo');
const input_pais = document.querySelector('#txt-pais');
const input_intra = document.querySelector('#intra');
const btn_registrar = document.querySelector('#btn-regitrar');

let lista_farmacias = obtener_farmacias();
let lista_productos = obtener_productos();

const creacion_del_select = () => {
    lista_farmacias.forEach(element => {
        let option = document.createElement('option');
        option.innerHTML = element.nombre;

        input_select.appendChild(option);

    });
};
creacion_del_select();



const registrar_producto = (e) => {
    e.preventDefault();
    let error = validar_producto();
    if (error == false) {
        let codigo = input_codigo.value;
        let nombre = input_nombre.value;
        let intravenoso = document.querySelector('input[type=radio]:checked').value;
        let costo = Number(input_costo.value);
        let farmacia = input_select.value;
        let obj_producto;
        obj_producto = new Producto(codigo, nombre, intravenoso, costo, farmacia)

        lista_productos.push(obj_producto);
        localStorage.setItem('lista_productos', JSON.stringify(lista_productos));
        Swal.fire(
            'Registro exitoso!',
            'Se registro un producto.',
            'success'
        )
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Faltan imformación o el codigo ya existe!',
            text: 'Por favor arrelgar los campos en rojos',
        })
    }

};

btn_registrar.addEventListener('click', (e) => { registrar_producto(e) });