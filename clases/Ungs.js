'use strict'

module.exports = class Ungs {
    constructor(){
        this.comisiones = [];
    }

    agregarComision(...comision) {
        comision.forEach(element => {
            this.comisiones.push(element)
        });
    }

    cursaCon(estudiante, docente) {
        let estanJuntos = false
        this.comisiones.forEach(comision => {
            if(comision.estaEstudiante(estudiante) && comision.estaDocente(docente)){
                estanJuntos = estanJuntos || true
            } else{
                estanJuntos = estanJuntos || false
            }
        });
        return estanJuntos
    }

}