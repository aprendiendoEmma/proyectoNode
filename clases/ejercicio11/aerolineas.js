'use strict';

module.exports = class Aerolineas {
    constructor() {
        this.vuelos = []
    }

    agregarVuelo (v) {
        this.vuelos.push(v)
    }

    vuelosEn(tripulante, tipoDeAvion) {
        let cuantasVecesVolo = 0
        this.vuelos.forEach(vuelo => {
            if(vuelo.estaTripulante(tripulante) && vuelo.avion.tipo === tipoDeAvion)
                cuantasVecesVolo++;
        });
        return cuantasVecesVolo
    }

    antiguedadPromedio(tipoDeAvion) {
        let promedio = 0
       this.vuelos.forEach(vuelo => {
           if (vuelo.avion.tipo === tipoDeAvion) {
                promedio = vuelo.promedioAntiguedad() 
           }
        });
        return promedio
    }

    vuelosSobreCargados() {
            let listaDeVuelos = []
        this.vuelos.forEach(vuelo => {
            if (vuelo.cantidadDeAeromozos() > vuelo.diezPorcientoCapacidad()) {
                listaDeVuelos.push(vuelo)
            }
        });
        return listaDeVuelos;
    }
}

