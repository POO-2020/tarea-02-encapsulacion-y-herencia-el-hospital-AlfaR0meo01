"use strict";
//import Nombre from './nombre.js';
export default class Doctor{
    constructor(nombre,especialidad,telefono,cedula){
        this._nombre = nombre;
        this._especialidad = especialidad;
        this._telefono = telefono;
        this._cedula = cedula;

    }
    getPerfil(){
        return `${this._cedula},${this._especialidad},${this._nombre.getNombreCompleto()},${this._telefono}`
    }
}

/*var doctor = new Doctor(new Nombre('felipe','rodriguez','ontiveros'),'cirujano pediatra',3121775682,123456789);
console.log(doctor.getPerfil());*/
