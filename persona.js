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

class Persona {
    nombre=''
    apellido=''
    nombreCompleto= ''
    direccion=''
    telefono=''
    referencias=[]
    edad=0

    constructor(nombre, apellido, referencias, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.referencias = referencias
        this.nombreCompleto = this.nombre + ' ' + this.apellido
        this.edad = edad
    }

    saludar(){
        console.log("Hola, mi nombre es ", this.nombreCompleto)
    }

}

const persona1 = new Persona('Luke', 'Skywalker', [], 25)
const persona2 = new Persona('Leia', 'Organa', [], 18)

console.log(persona1)

console.log(persona1.nombreCompleto)

persona1.saludar()
persona2.saludar()

//console.log(personas)