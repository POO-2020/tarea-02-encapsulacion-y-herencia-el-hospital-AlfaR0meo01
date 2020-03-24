import Time from "./js/time.js";
import Nombre from "./js/nombre.js";
import Doctor from "./js/doctor.js";
import Fecha from "./js/fecha.js";
import Paciente from "./js/paciente.js";
import Hospital from "./js/hospital.js";
import Cita from "./js/cita.js";
import PacienteAsegurado from "./js/paciente_asegurado.js";

class Main{
    constructor(){
        this.hospital = new Hospital("San jose", "Calle falsa #123");
    }
    testHospital(){
        var dataDoctor1 = {
            cedula: 1234594,
            especialidad: "Urologia",
            nombre: new Nombre("ZulU","Bravo","Charlie"),
            telefono: 3121542578
        };
        var dataDoctor2 = {
            cedula: 154879,
            especialidad: "Traumatologia",
            nombre: new Nombre("ZulU","Alfa","Charlie"),
            telefono:3128746365
        };
        var dataDoctor3 = {
            cedula: 597135,
            especialidad: "Oftalmologia",
            nombre: new Nombre("ZulU","Echo","Charlie"),
            telefono: 312657841
        };
        var doctor1= new Doctor(dataDoctor1);
        var doctor2 = new Doctor(dataDoctor2);
        var doctor3= new Doctor(dataDoctor3);
        this.hospital.registrarDoctores(doctor1);
        this.hospital.registrarDoctores(doctor2);
        this.hospital.registrarDoctores(doctor3);
        this.hospital.listarDoctores();
    
        var dataCita1 = {
            fecha: new Fecha(16,2,2020),
            hora: new Time(15,50),
            doctor: new Nombre("Juliet","Romeo","Charlie"),
            paciente: new Nombre("Delta","Whiskey","Tango")
        };
        var dataCita2 = {
            fecha: new Fecha(22,3,2020),
            hora: new Time(20,10),
            doctor: new Nombre("Juliet","Quebec","Charlie"),
            paciente: new Nombre("Delta","Victor","Tango")
        };
        var dataCita3 = {
            fecha: new Fecha(22,3,2020),
            hora: new Time(20,30),
            doctor: new Nombre("Zacarias","Foxtrot","Gomez"),
            paciente: new Nombre("Delta","Sierra","Tango")
        };
        var c1= new Cita(dataCita1);
        var c2 = new Cita(dataCita2);
        var c3 = new Cita(dataCita3);
        this.hospital.registrarCitas(c1);
        this.hospital.registrarCitas(c2);
        this.hospital.listarCitas();
        console.log(this.hospital.actualizarCita(c2,c3));
        this.hospital.listarCitas();
    }
}
var app = new Main();
app.testHospital();
