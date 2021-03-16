'use strict';

module.exports = class Aerolineas {
    constructor(){
        this.vuelos = []
    }
    agregarVuelo(vuelo) {
        this.vuelos.push(vuelo) 
       }
}

