'use strict';

module.exports =  class Vuelo {
    constructor(avion) {
        this.avion = avion;
        this.tripulantes = [];
    }

    agregarTripulante(tripulante) {
        this.tripulantes.push(tripulante)

    }
}

