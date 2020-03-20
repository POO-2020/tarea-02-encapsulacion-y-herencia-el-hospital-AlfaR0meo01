"use strict";
export default class Nombre {
    constructor(nombre ,apellido1 ,apellido2 ) {
        this.nombre = nombre;
        this.apellido1 = apellido1
        this.apellido2 = apellido2;
        
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido1} ${this.apellido2}`;
    }
    getApellidoNombre() {
        return `${this.apellido1} ${this.apellido2} ${this.nombre}`;
    }
    getIniciales() {
        return `${this.nombre.charAt(0)}.${this.apellido1.charAt(0)}.${this.apellido2.charAt(0)}`;
    }
}



