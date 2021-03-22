'use strict';

module.exports = class Atencion {
    constructor() {
        this.veterinarios = [];
        this.mascotas = [];
        this.medicamentos = [];
    }


    agreagarVeterinarios(veterinarios) {
        veterinarios.forEach(element => {
            this.veterinarios.push(element)
        });
    }

    agreagarMascotas(mascotas) {
        mascotas.forEach(element => {
            this.mascotas.push(element)
            
        });
    }

    agregarMedicamentos(medicamentos){
        medicamentos.forEach(element => {
            this.medicamentos.push(element)
        });

    }
}