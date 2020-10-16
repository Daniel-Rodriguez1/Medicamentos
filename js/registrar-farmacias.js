'use strict';

const btn_registrar = document.querySelector('#btn-regitrar');
const input_codigo = document.querySelector('#txt-codigo');
const input_nombre = document.querySelector('#txt-nombre');
const input_pais = document.querySelector('#txt-pais');

let lista_farmacias = obtener_farmacias();

const registrar_farmacia = () => {
    let error = validar_codigo();
    if (error == false) {
        let codigo = input_codigo.value;
        let nombre = input_nombre.value;
        let pais = input_pais.value;
        let obj_tienda;
        obj_tienda = new Farmacia(codigo, nombre, pais)
        lista_farmacias.push(obj_tienda);
        localStorage.setItem('lista_farmacias', JSON.stringify(lista_farmacias));
        Swal.fire(
            'Registro exitoso!',
            'Se registro una farmacia.',
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

btn_registrar.addEventListener('click', registrar_farmacia);