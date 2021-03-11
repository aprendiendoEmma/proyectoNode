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

    // suficientesDocentes() {
    //     let suficientesDocentes2 = true

    //     this.comisiones.forEach(comision => {
    //         if (comision.cantidadEstudiantes() >=20  comision.cantidadDeDocentes()
    //             suficientesDocentes2 = suficientesDocentes2 && false
    //     });

    //     return suficientesDocentes2 
    // }


    losMejores () {
        let losMejores = []
        this.comisiones.forEach(comision => {

        losMejores.push(comision.estudiantesConLaNotaMasAlta());
        });
        return losMejores
    }
}