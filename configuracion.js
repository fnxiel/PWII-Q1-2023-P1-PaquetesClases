var {round} = require('mathjs')

const configuracion = {
    tipoCambio: 24.7,
    tipoCambioRendondeado: round(24.7)
}

//Funcion tradicional
function configurarFuncion(parametros){
    return 0
}

//Funcion de flecha
const configurar = (nuevoTipoCambio) => {
    configuracion.tipoCambio = nuevoTipoCambio
    configuracion.tipoCambioRendondeado = round(nuevoTipoCambio)
}

//Son iguales en rendimiento.

module.exports = {
    configuracion: configuracion,
    configurar: configurar
}