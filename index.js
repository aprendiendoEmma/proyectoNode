const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/'));
//ACA VAN LAS IMPORTACIONES
const ClinicaVeterinaria = require('./clases/ejercicioVeterinaria/ClinicaVeterinaria');
const Atencion = require('./clases/ejercicioVeterinaria/Atencion');
const Veterinario = require('./clases/ejercicioVeterinaria/Veterinario');
const Mascota = require('./clases/ejercicioVeterinaria/Mascota');
const Medicamento = require('./clases/ejercicioVeterinaria/Medicamento');


//ACA VA EL CODIGO QUE SE VA A EJECUTAR SIEMPRE!
app.listen('3000', function() {
   
    const veterinarios = crearVeterinarios()
    const mascotas = crearMascotas()
    const medicamentos = crearMedicamentos()
    const atencion = new Atencion()
    atencion.agreagarVeterinarios(veterinarios);
    atencion.agreagarMascotas(mascotas);
    atencion.agregarMedicamentos(medicamentos);
    const clinicaVeterinaria = new ClinicaVeterinaria()
    clinicaVeterinaria.agregarAtencion(atencion)
    console.log(clinicaVeterinaria)




    const veterinarios2 = crearVeterinarios2()
    const mascotas2 = crearMascotas2()
    const medicamentos2 = crearMedicamentos2()
    const atencion2 = new Atencion()
    atencion2.agreagarVeterinarios(veterinarios2);
    atencion2.agreagarMascotas(mascotas2);
    atencion2.agregarMedicamentos(medicamentos2);
    clinicaVeterinaria.agregarAtencion(atencion2)
   console.log(clinicaVeterinaria) 
    
});

crearVeterinarios = () => {
    const veterinario1 = new Veterinario('Emmanuel', 'Perez', 3333, 8);
    const veterinario2 = new Veterinario('Marcos', 'Vera', 444, 5);
    const veterinario3 = new Veterinario('Tomas', 'Mouse', 567, 3);

    return[veterinario1, veterinario2, veterinario3]
}

crearMascotas = () =>{
    const mascota1 = new Mascota('perro', ' caniche', 5 )
    const mascota2 = new Mascota('perro', ' doberman', 2 )
    const mascota3 = new Mascota('perro', ' salchicha', 1 )
    
    return[mascota1, mascota2, mascota3];
}

crearMedicamentos = () => {
    const medicamento1 = new Medicamento('perro', 'canex', 450);
    const medicamento2 = new Medicamento('perro', 'aspirina', 550);
    const medicamento3 = new Medicamento('perro', 'albedazol', 450);
    
    return [medicamento1, medicamento2, medicamento3];
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
crearVeterinarios2 = () => {
const veterinario4 = new Veterinario('ramon', 'Perez', 3333, 8);
    const veterinario5 = new Veterinario('jose', 'Vera', 444, 5);
    const veterinario6 = new Veterinario('pedro', 'Mouse', 567, 3);
    return[veterinario4, veterinario5, veterinario6];
}


crearMascotas2 = () =>{
    const mascota4 = new Mascota('perro', ' caniche', 7 )
    const mascota5 = new Mascota('perro', ' doberman', 8 )
    const mascota6 = new Mascota('perro', ' salchicha', 4 )
    
    return[mascota4, mascota5, mascota6];
}

crearMedicamentos2 = () => {
    const medicamento4 = new Medicamento('perro', 'canex', 450);
    const medicamento5 = new Medicamento('perro', 'aspirina', 550);
    const medicamento6 = new Medicamento('perro', 'albedazol', 450);
    
    return [medicamento4, medicamento5, medicamento6];
}