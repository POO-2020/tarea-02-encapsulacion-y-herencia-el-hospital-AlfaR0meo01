"use strict";
/*import Nombre from './nombre.js';
import Fecha from './fecha.js';*/
export default class Paciente{
    constructor (nombre,fecha,telefono){
        this._nombre = nombre;
        this._fecha = fecha;
        this._telefono = telefono;
    }
    getPerfil(){
        var telefonoString= this._telefono.toString();
        return `${this._nombre.getNombreCompleto()}, ${this._fecha.getFecha()}, ${telefonoString.slice(0,3)}-${telefonoString.slice(3,6)}-${telefonoString.slice(6,10)}`;
    }
}
/*var paciente = new Paciente(new Nombre('felipe','rodriguez','ontiveros'),new Fecha(2,2,2019), 3121775682);
console.log(paciente.getPerfil());*/


