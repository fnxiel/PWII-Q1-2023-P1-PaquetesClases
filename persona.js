/*
const personas = [
    {
        nombre: 'Luke',
        apellido: 'Skywalker',
        direccion: 'Universidad CEUTEC',
        telefono: '2152-1251',
        referencias: [
            'Contacto profesional',
            'Contacto personal'
        ],
        edad: 20 
    },
    {
        nombre: 'Leia',
        apellido: 'Organa',
        direccion: 'Colonia de un lugar',
        telefono: '6344-1251',
        referencias: [],
        edad: 18 
    },
    {
        nombre: 'C3PO',
        apellido: 'skywalker',
        domicilio: 'Colonia de un lugar',
        telefono: '6344-1251',
        referencias: [],
        edad: 18 
    },
]
*/

class Persona {
    nombre=''
    apellido=''
    nombreCompleto= ''
    direccion=''
    telefono=''
    referencias=[]
    edad=0
    pasosCaminados= 0
    id= 0

    constructor(nombre, apellido, referencias, edad, id){
        this.nombre = nombre
        this.apellido = apellido
        this.referencias = referencias
        this.nombreCompleto = this.nombre + ' ' + this.apellido
        this.edad = edad
        this.id = id
    }

    saludar(){
        console.log("Hola, mi nombre es ", this.nombreCompleto)
    }

    caminar(cantidadPasos){
        this.pasosCaminados = this.pasosCaminados + cantidadPasos
        //this.nombreCompleto + " Ha caminado " + this.pasosCaminados + " pasos"
        console.log(`${this.nombreCompleto} ha caminado ${this.pasosCaminados} pasos`)
        //backtick
    }

}

module.exports = Persona