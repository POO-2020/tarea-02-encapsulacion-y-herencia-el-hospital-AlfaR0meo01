"use strict";
/*import Nombre from './nombre.js';
import Fecha from './fecha.js';*/
export default class Paciente{
    constructor (nombre,fecha,telefono){
        this.nombre = nombre;
        this.fecha = fecha;
        this.telefono = telefono;
    }
    getPerfil(){
        return `${this.nombre.getNombreCompleto()}, ${this.fecha.getFecha()}, ${this.telefono}`;
    }
}
/*var paciente = new Paciente(new Nombre('felipe','rodriguez','ontiveros'),new Fecha(2,2,2019), 3121775682);
console.log(paciente.getPerfil());*/


