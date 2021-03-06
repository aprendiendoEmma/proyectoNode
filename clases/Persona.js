'use strict';

const test = require('./test');

module.exports = class Persona {

    constructor(nombre, edad) {

        this.nombre = nombre;
        this.edad= edad
        this.dato = new test('HOLA');
    }

}