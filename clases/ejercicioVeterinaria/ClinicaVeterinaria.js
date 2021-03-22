'use strict';

module.exports = class ClinicaVeterinaria{
    constructor(){
        this.atenciones = []
    }
    
    agregarAtencion(atencion) {
        this.atenciones.push(atencion)

    }
}