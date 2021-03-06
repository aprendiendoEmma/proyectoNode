const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));

//ACA VAN LAS IMPORTACIONES
const Persona = require('./clases/Persona');
const nuevoObjeto = require('./otraCarpeta/nuevoObjeto');


//ACA VA EL CODIGO QUE SE VA A EJECUTAR SIEMPRE!
app.listen('3000', function() {

});