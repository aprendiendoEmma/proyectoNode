'use strict';

module.exports =  class Vuelo {
    constructor(avion) {
        this.avion = avion;
        this.tripulantes = [];
    }

    agregarTripulantes(lista) {
        lista.forEach(Element => {
            this.tripulantes.push(Element)
        });
    }
}

