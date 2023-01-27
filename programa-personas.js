var Persona = require('./persona')
var Empleado = require('./empleado')

const persona1 = new Persona('Luke', 'Skywalker', [], 25, 1)
const persona2 = new Persona('Leia', 'Organa', [], 18, 2)
const persona3 = new Persona('Darth', 'Vader', [], 35, 3)
const persona4 = new Persona('Han', 'Solo', [persona1, persona2], 54, 4)

console.log(persona1)
console.log(persona1.nombreCompleto)

persona1.saludar()
persona2.saludar()

persona1.caminar(5)
persona2.caminar(15)

let listadoPersonas = []
//Crear, Update, Delete, Read CRUD

//Crear
listadoPersonas.push(persona1)
listadoPersonas.push(persona2)
listadoPersonas.push(persona3)
listadoPersonas.push(persona4)


//Update
//Filtro
const personaEncontrada = listadoPersonas.find((persona) => persona.id === 2)
//const personaEncontrada = listadoPersonas.filter((persona) => persona.id === 2)
personaEncontrada.direccion = 'Esta es la nueva direccion a la que se mudo esta persona.'
//console.log("Persona que se encontro con el id especificado es: ", personaEncontrada)
//Actualizacion


//Delete
//listadoPersonas.pop()
listadoPersonas = listadoPersonas.filter((persona) => persona.id !== 3)
console.log(listadoPersonas)


//buscamos la persona con id nro 4
const resultadoBusqueda = listadoPersonas.find(persona => persona.id === 4)
resultadoBusqueda.referencias.forEach(referencia => console.log(referencia.nombreCompleto))

var empleado = new Empleado('Buen empleado')
console.log(empleado)

//console.log(personas)