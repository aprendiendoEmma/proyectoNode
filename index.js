const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));

//ACA VAN LAS IMPORTACIONES
const Estudiante = require('./clases/Estudiante');
const Docente = require('./clases/Docente');
const Comision = require('./clases/Comision');
const Ungs = require('./clases/Ungs');
//ACA VA EL CODIGO QUE SE VA A EJECUTAR SIEMPRE!
app.listen('3000', function() {
    const estudiantes = crearEstudiantes()
    const califaciones = [9, 7, 5, 4];
    const docentes = crearDocentes();
    const comision1 = new Comision('programacion1', 1, docentes, estudiantes, califaciones);
    console.log(comision1);


});

const crearEstudiantes = () => {

    const estudiante1 = new Estudiante('marcos', 123);
    const estudiante2 = new Estudiante('emma', 345);
    const estudiante3= new Estudiante('cristian', 567);
    const estudiante4 = new Estudiante('guille', 789);

    return [estudiante1,estudiante2,estudiante3,estudiante4];
}

const crearDocentes = () => {

    const docente1 = new Docente('docente1', 1234567);
    const docente2 = new Docente('docente2', 1234568);
    const docente3 = new Docente('docente3', 1234569);
    const docente4 = new Docente('docente4', 1234560);

    return [docente1, docente2, docente3, docente4];
}

