const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));
//ACA VAN LAS IMPORTACIONES


//ACA VA EL CODIGO QUE SE VA A EJECUTAR SIEMPRE!
app.listen('3000', function() {
   
});

