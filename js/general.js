'use strict';
const obtener_farmacias = () => {
    let lista_farmacias = [];
    if (localStorage.getItem('lista_farmacias')) {
        lista_farmacias = JSON.parse(localStorage.getItem('lista_farmacias'));
    }
    return lista_farmacias;
};
const obtener_productos = () => {
    let lista_productos = [];
    if (localStorage.getItem('lista_productos')) {
        lista_productos = JSON.parse(localStorage.getItem('lista_productos'));
    }
    return lista_productos;
};

const validar_codigo = () => {
    obtener_farmacias();
    console.log(lista_farmacias);
    let error = false;
    let existe = lista_farmacias.filter((farmacia) => farmacia.codigo == input_codigo.value).length;

    if (existe || input_codigo.value == "") {
        error = true;
        input_codigo.classList.add('error');
    }
    if (input_nombre.value == "") {
        error = true;
        input_nombre.classList.add('error');

    } else {
        input_nombre.classList.remove('error');
    }
    if (input_pais.value == "") {
        error = true;
        input_pais.classList.add('error');

    } else {
        input_pais.classList.remove('error');
    }
    return error;
};
const validar_producto = () => {
    obtener_productos();
    let error = false;

    lista_productos.forEach(element => {
        if (input_codigo.value == "" || element.codigo == input_codigo.value) {
            error = true;
            input_codigo.classList.add('error');
        } else {
            input_codigo.classList.remove('error');
        }
        if (input_nombre.value == "") {
            error = true;
            input_nombre.classList.add('error');

        } else {
            input_nombre.classList.remove('error');
        }

        if (input_costo.value == "") {
            error = true;
            input_costo.classList.add('error');

        } else {
            input_costo.classList.remove('error');
        }
        console.log(input_select)
        if (input_select.value == " ") {
            error = true;
            input_select.classList.add('error');

        } else {
            input_select.classList.remove('error');
        }
    });
    return error;
};