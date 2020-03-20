'use strict';
export default class Hospital {
    constructor(nombre, direccion, doctores, citas) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.doctores = [];
        this.citas = [];
    }

    registrarDoctores(doctor) {
        this.doctores.push(doctor);
    }

    registrarCitas(cita) {
        this.citas.push(cita);
    }

    listarDoctores() {
        this.doctores.forEach(i => {
            return(i.getPerfil(), '\n');
        });
    }

    listarCitas() {
        this.citas.forEach(i => {
            return(i.getCita(), '\n');
        });
    }
}