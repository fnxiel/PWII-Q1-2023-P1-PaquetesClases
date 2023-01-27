var Persona = require('./persona')
class Empleado extends Persona{
    sueldo =0
    puesto = ''
    cantidadHorasTrabajadas=0
    constructor(nombreEmpleado){
        super(nombreEmpleado)
    }

    trabajar(cantidadHoras){
        this.cantidadHorasTrabajadas = this.cantidadHorasTrabajadas + cantidadHoras
    }
}
module.exports = Empleado