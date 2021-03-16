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
    const avion1 = new Avion ('comercial', 200);
    const avion2 = new Avion ('charter', 150);
    const avion3 = new Avion ('directo', 250);
    const avion4 = new Avion ('one way', 200);


    const tripulante1 = new Tripulante ('Emmmanuel', 'Piloto', 20);
    const tripulante2 = new Tripulante ('Marcos', 'Copiloto', 5); 
    const tripulante3 = new Tripulante ('elias', 'piloto', 20);
    const tripulante4 = new Tripulante ('chuchu', 'aeromozo', 5); 
    const tripulante5 = new Tripulante ('Emmmanuel','aeromozo'); 
 
    const tripulante = crearTripulantes
   const vuelo1 = new Vuelo(avion1,agregarTripulantes(tripulante))
   console.log(vuelo1)



});



const  crearTripulantes = () => {
    
const tripulante1 = new Tripulante ('Emmmanuel', 'Piloto', 20);
const tripulante2 = new Tripulante ('Marcos', 'Copiloto', 5); 
const tripulante3 = new Tripulante ('elias', 'piloto', 20);
const tripulante4 = new Tripulante ('chuchu', 'aeromozo', 5); 
const tripulante5 = new Tripulante ('Emmmanuel','aeromozo'); 
 
    return[tripulante1 ,tripulante2, tripulante3, tripulante4,tripulante5];
}
