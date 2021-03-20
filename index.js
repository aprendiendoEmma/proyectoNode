const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));
//ACA VAN LAS IMPORTACIONES
const Avion = require('./clases/ejercicio11/avion');
const Vuelo = require ('./clases/ejercicio11/vuelo');
const Aerolineas = require ('./clases/ejercicio11/aerolineas'); 
const Tripulante = require('./clases/ejercicio11/tripulante');

//ACA VA EL CODIGO QUE SE VA A EJECUTAR SIEMPRE!
app.listen('3000', function() {


    const tripulacion1 = crearTripulantes1()
    const avion2 = new Avion('F-22', 20);
    const vuelo = new Vuelo(avion2);
    vuelo.agregarTripulantes(tripulacion1)
    const aerolineas = new Aerolineas();
    aerolineas.agregarVuelo(vuelo);
  
     const tripulacion2 = crearTripulantes2()
     const avion3 = new Avion('F-22 Raptor', 2);
     const vuelo1 = new Vuelo(avion3);
     vuelo1.agregarTripulantes(tripulacion2)
     aerolineas.agregarVuelo(vuelo1);
     console.log(' RESULTADO.................................................')
    console.log(aerolineas.vuelosSobreCargados());

    

    
});

// vuelo 1
const crearTripulantes1 = () => {
    const tripulante1 = new Tripulante('Emmanuel', 'Piloto', 25);
    const tripulante2 = new Tripulante('marcos', 'copiloto', 15);
    const tripulante3 = new Tripulante('Tomas', 'aeromozo', 5);
    const tripulante4 = new Tripulante('juan', 'aeromozo', 12);
    const tripulante5 = new Tripulante('pedro', 'aeromozo', 7);
    
    return [ tripulante1,tripulante2,tripulante3,tripulante4, tripulante5];
}



// vuelo 2
const crearTripulantes2 = () => {
    const tripulante4 = new Tripulante('tripulante1', 'Piloto', 25);
    const tripulante5 = new Tripulante('tripulante2', 'copiloto', 15);
    const tripulante6 = new Tripulante('tripulante3', 'aeromozo', 5);

    return [ tripulante4, tripulante5, tripulante6];
}

// vuelo 3

const crearTripulantes3 = () => {
    const tripulante7 = new Tripulante('tripulante4', 'Piloto', 25);
    const tripulante8 = new Tripulante('tripulante5', 'copiloto', 15);
    const tripulante9 = new Tripulante('tripulante6', 'aeromozo', 5);

    return [ tripulante7, tripulante8, tripulante9];
}
