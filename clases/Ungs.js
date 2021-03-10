'use strict'

module.exports = class Ungs {
    constructor(){
        this.comisiones = [];
    }

    agregarComision(comision) {
        this.comisiones.push(comision);
    }
}