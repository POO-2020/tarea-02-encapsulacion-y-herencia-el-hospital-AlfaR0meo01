"use strict";
export default class Time {
    constructor(hora, minutos) {
        this._hora = hora;
         this._minutos = minutos;
        this._ampm = this.hora >= 12 ? 'pm' : 'am';
    }
    
    getFormato12() {
        this._hora = this.hora % 12;
        this._hora = this.hora ? this.hora : 12;
        return ` ${this.hora}:${ this._minutos} ${this._ampm}`;
    }

    getFormato24() {
        return `${this.hora}:${ this._minutos} ${this._ampm} `;
    }
}

/*var time = new Time(10, 50,'am');
var time2 = new Time(15,50,'pm');
console.log(`la hora es ${time.getFormato12()}`);
console.log(`la hora es ${time2.getFormato24()}`);*/