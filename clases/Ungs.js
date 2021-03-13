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

    suficientesDocentes() {
        let haySuficientesDoc = true
        this.comisiones.forEach(comision => {
            let docTendriaQueHaber = comision.cantidadEstudiantes() / 20;
            console.log(docTendriaQueHaber)
            if(comision.cantidadDeDocentes() < docTendriaQueHaber )
                haySuficientesDoc = haySuficientesDoc && false
        
        });
        
        return haySuficientesDoc
    }


    losMejores () {
        let losMejores = []
        this.comisiones.forEach(comision => {

            losMejores.push(...comision.estudiantesConLaNotaMasAlta());
        });
        return losMejores
    }

    alumnosDe(docente) {
        const estud = new Set();
        this.comisiones.forEach(comision => {
            if (comision.docentes.includes(docente)) {
                estud.add(comision.estudiantes)
            }
        });

        return [...estud];
    }
}
