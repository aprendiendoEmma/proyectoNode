const express = require('express');
const Persona = require('./clases/Persona');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function() {
    const per = new Persona('emma', 23);
    console.log(per);
});