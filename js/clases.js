'use strict';

class Farmacia {
    constructor(pcodigo, pnombre, pais) {
        this.codigo = pcodigo;
        this.nombre = pnombre;
        this.pais = pais;
        this.inventario = [];

    };

    agregar_producto = (obj_producto) => {
        this.inventario.push(obj_producto);
    };

};
class Producto {
    constructor(codigo, nombre, intravenoso, costo, farmacia) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.intravenoso = intravenoso;
        this.costo = costo;
        this.farmacia = farmacia;

    };


};

// class Inventario extends Farmacia {
//     constructor(codigo, nombre, pais, codigo, nombre, intravenoso, costo, farmacia) {
//         super(codigo, nombre, pais);
//         this.codigo = codigo;
//         this.nombre = nombre;
//         this.intravenoso = intravenoso;
//         this.costo = costo;
//         this.farmacia = farmacia;

//     }
// };