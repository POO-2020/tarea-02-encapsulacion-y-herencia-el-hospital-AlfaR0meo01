"use strict";
//import Nombre from './nombre.js';
export default class Doctor{
    constructor(nombre,especialidad,telefono,cedula){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;

    }
    getPerfil(){
        return `${this.cedula},${this.especialidad},${this.nombre.getNombreCompleto()},${this.telefono}`
    }
}

/*var doctor = new Doctor(new Nombre('felipe','rodriguez','ontiveros'),'cirujano pediatra',3121775682,123456789);
console.log(doctor.getPerfil());*/
