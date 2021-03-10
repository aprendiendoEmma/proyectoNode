'use strict';

class Persona {

    constructor(nombre, edad) {
        this.edad = nombre;
        this.edad =  edad;
    }
    
    masJovenQue(otro){
        if (this.edad < otro.edad) {
            return true
        }
        return false 
    }

    tocayo(otro) {
        if (this.nombre === otro.nombre) {
            return true
        }
        return false
    }
    mismaPersona(otro) {
        if (this.nombre === otro.nombre && this.edad === otro.edad) {
            return true
        }
        return false
    }
     
    static masJoven(grupo) {
        let masjoven = grupo[0]
        grupo.forEach(element => {
            if (element.edad < grupo.edad) {
                masjoven = element
                
            }
        });
    }

}


module.exports = Persona;