const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));

//ACA VAN LAS IMPORTACIONES
const Tripulantes = require('./clases/ejercicio 11/Tripulantes');
const Avion = require('./clases/ejercicio 11/Avion');
const Vuelo = require ('./clases/ejercicio 11/Vuelo');
const Aerolineas = require('./clases/ejercicio 11/Aerolineas'); 
const Tripulante = require('./clases/ejercicio 11/Tripulantes');

//ACA VA EL CODIGO QUE SE VA A EJECUTAR SIEMPRE!
app.listen('3000', function() {


});




const tripulante1 = new Tripulante ('Emmmanuel', 'Piloto', 20);
const tripulante2 = new Tripulante ('Marcos', 'Copiloto', 5); 


const avion1 = new Avion ('comercial', 200);
const avion2 = new Avion ('charter', 150);
const avion3 = new Avion ('directo', 250);
const avion4 = new Avion ('one way', 200);