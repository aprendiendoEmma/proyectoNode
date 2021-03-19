'use strict';


module.exports = class Vuelo {
    constructor(avion) {
        this.avion = avion;
        this.tripulantes = [];
    }


    agregarTripulantes(tripulacion) {
        
        tripulacion.forEach(element => {
            this.tripulantes.push(element)
        });
    }

    agregarTripulante(t) {
        this.tripulantes.push(t)
    }

    estaTripulante(t) {
       return this.tripulantes.includes(t)
    }
 
    promedioAntiguedad(){
        let sumaDeAntig = 0
        this.tripulantes.forEach(tripulante => {
            sumaDeAntig += tripulante.antiguedad
        });
         return sumaDeAntig / this.tripulantes.length
    }

    diezPorcientoCapacidad() {
        return this.avion.capacidad * 0,1

    }

    cantidadDeAeromozos() {
        let cantidad = 0
        this.tripulantes.forEach(tripulante => {
            if (tripulante.cargo === 'aeromozo') {
                cantidad++
            }            
        });
        return cantidad
    }
}