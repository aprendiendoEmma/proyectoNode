const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));
//ACA VAN LAS IMPORTACIONES
const ClinicaVeterinaria = require('./clases/ejercicioVeterinaria/ClinicaVeterinaria');
const atencion = require('./clases/ejercicioVeterinaria/atencion');
const Veterinario = require('./clases/ejercicioVeterinaria/veterinario');
const mascotas = require('./clases/ejercicioVeterinaria/mascotas');
const medicamentos = require('./clases/ejercicioVeterinaria/medicamentos');

//ACA VA EL CODIGO QUE SE VA A EJECUTAR SIEMPRE!
app.listen('3000', function() {
   


});

crearVeterinarios1 = () => {
    const veterinario1 = new Veterinario('Emmanuel', 'Perez', 3333, 8);
    const veterinario2 = new Veterinario('Marcos', 'Vera', 444, 5);
    const veterinario3 = new Veterinario('Tomas', 'Mouse', 567, 3);
}

crearVeterinarios2 = () => {
    const veterinario4 = new Veterinario('ramon', 'Perez', 3333, 8);
    const veterinario5 = new Veterinario('jose', 'Vera', 444, 5);
    const veterinario6 = new Veterinario('pedro', 'Mouse', 567, 3);
}


crearMascotas = () =>{
    const mascota = new Mascota('perro', ' caniche', 5 )
    const mascota = new Mascota('perro', ' doberman', 2 )
    const mascota = new Mascota('perro', ' salchicha', 1 )
}

crearMedicamentos = () => {
    const medicamento = new Medicamentos('perro', 'canex', 450);
    
}