const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));
//ACA VAN LAS IMPORTACIONES
const ClinicaVeterinaria = require('./clases/ejercicioVeterinaria.js/ClinicaVeterinaria');
const atencion = require('./clases/ejercicioVeterinaria.js/atencion');
const veterinario = require('./clases/ejercicioVeterinaria.js/veterinario');
const mascotas = require('./clases/ejercicioVeterinaria.js/mascotas');
const medicamentos = require('./clases/ejercicioVeterinaria.js/medicamentos');

//ACA VA EL CODIGO QUE SE VA A EJECUTAR SIEMPRE!
app.listen('3000', function() {
   
});

