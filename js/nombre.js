"use strict";
export default class Nombre {
    constructor(nombre ,apellido1 ,apellido2 ) {
        this._nombre = nombre;
        this._apellido1 = apellido1
        this._apellido2 = apellido2;
        
    }
    getNombreCompleto() {
        return `${this._nombre} ${this._apellido1} ${this._apellido2}`;
    }
    getApellidoNombre() {
        return `${this._apellido1} ${this._apellido2} ${this._nombre}`;
    }
    getIniciales() {
        return `${this._nombre.charAt(0)}.${this._apellido1.charAt(0)}.${this._apellido2.charAt(0)}`;
    }
}



