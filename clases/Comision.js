'use strict';

module.exports = class Comision {
    
    constructor(materia, numero, docentes, estudiantes, califaciones) {
        this.materia = materia;
        this.numero = numero;
        this.docentes = docentes;
        this.estudiantes = estudiantes;
        this.califaciones =califaciones;
    }
}
