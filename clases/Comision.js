'use strict';

module.exports = class Comision {
    
    constructor(materia, numero, docentes, estudiantes, califaciones) {
        this.materia = materia;
        this.numero = numero;
        this.docentes = docentes;
        this.estudiantes = estudiantes;
        this.califaciones =califaciones;
    }

    estaEstudiante(estudiante) {
       return this.estudiantes.includes(estudiante);  
    }

    estaDocente(docente) {
        return this.docentes.includes(docente);
    }

    cantidadEstudiantes() {
        return this.estudiantes.length
    }

    cantidadDeDocentes() {
        return this.docentes.length
    }

    estudiantesConLaNotaMasAlta() {
   
        const masAlta = Math.max.apply( null, this.califaciones);
        const posCalificaciones = [];
        const mejoresEstudiantes = [];
        let pos = 0;

        this.califaciones.forEach(cal => {
            if(cal === masAlta){ 
                posCalificaciones.push(pos)
            }
            pos++;
        })

        posCalificaciones.forEach(pos => {
            mejoresEstudiantes.push(this.estudiantes[pos])
        })

        return mejoresEstudiantes
    }


    
}


