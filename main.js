import Time from "./js/time.js";
import Nombre from "./js/nombre.js";
import Doctor from "./js/doctor.js";
import Fecha from "./js/fecha.js";
import Paciente from "./js/paciente.js";
import Hospital from "./js/hospital.js";
import Cita from "./js/cita.js";
class Main{
    constructor(){
        this.hospital = new Hospital("San jose", "Calle falsa #123")
    }
    registrarDoctor(){
        var doctor1= new Doctor(1234594,"Urologia",new Nombre("Elza","Sonador","Fajitas"),3121542578);
        var doctor2 = new Doctor(154879,"Traumatologia",new Nombre("Elmer","Homero","Torrez"),3128746365);
        var doctor3= new Doctor(597135,"Oftalmologia",new Nombre("Zacarias","Rios","Gomez"),312657841);
        this.hospital.registrarDoctores(doctor1);
        this.hospital.registrarDoctores(doctor2);
        this.hospital.registrarDoctores(doctor3);
        this.hospital.listarDoctores();
    }
    registrarCita(){
        var c1= new Cita(new Fecha(16,2,2020),new Time(15,50),new Nombre("Elza","Sonador","Fajitas"),new Nombre("Elmo","Torista","Diaz"));
        this.hospital.registrarCitas(c1);
        this.hospital.listarCitas();
    }
}
var app =new Main();
app.registrarDoctor();
console.log("--------------------");
app.registrarCita();
