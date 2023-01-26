//import { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } from 'mathjs'
var { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt, simplify } = require('mathjs')
var colors = require('colors');
var {configuracion, configurar} = require('./configuracion')
var {impuesto} = require('./impuesto')
//var {impuesto} = require('./impuesto_sara')

console.log("El impuesto de este monto es", impuesto(100000))


console.log(configuracion)

//Ejemplo 1
console.log(round(configuracion.tipoCambio).toString().bgGreen)

//Ejemplo 2 tipo de cambio redondeado desde configuracion
console.log(configuracion.tipoCambioRendondeado)

//Ejemplo 3 Llamar una funcion desde una exportacion multiple
configurar(29.4)
console.log(configuracion.tipoCambioRendondeado)
console.log(configuracion.tipoCambio)

  console.log("A continuacion calculos matematicos")
  // functions and constants
  console.log(round(e, 3).toString().red)                    // 2.718
  console.log(pi)
  atan2(3, -3) / pi              // 0.75
  log(10000, 10)                 // 4
  sqrt(-4)                       // 2i
  pow([[-1, 2], [3, 1]], 2)      // [[7, 0], [0, 7]]
  derivative('x^2 + x', 'x')     // 2 * x + 1
  
  // expressions
  evaluate('12 / (2.3 + 0.7)')   // 4
  evaluate('12.7 cm to inch')    // 5 inch
  evaluate('sin(45 deg) ^ 2')    // 0.5
  evaluate('9 / 3 + 2i')         // 3 + 2i
  evaluate('det([-1, 2; 3, 1])') // -7
  
  // chaining
  chain(3)
      .add(4)
      .multiply(2)
      .done()  // 14


/*
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
*/