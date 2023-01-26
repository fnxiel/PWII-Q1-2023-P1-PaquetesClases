const estructuraImpuesto = [
    {
        desde: 0,
        hasta: 199039.47,
        tasa: 0
    },
    {
        desde: 199039.48,
        hasta: 303499.90,
        tasa: 15
    },
    {
        desde: 303499.91,
        hasta: 705813.76,
        tasa: 20
    },
    {
        desde: 705813.77,
        hasta: 99999999999999999,
        tasa: 25
    }
]

console.log(estructuraImpuesto)

// recorrer estructuraImpuesto mostrando el resultado de restar el valor "desde" del "hasta", 
for (let index = 0; index < estructuraImpuesto.length; index++) {
    var resultado = estructuraImpuesto[index].hasta-estructuraImpuesto[index].desde;
    //console.log(resultado);
}

//
function imprimirRangoImpuesto(elemento){
    var resultado = elemento.hasta-elemento.desde;
    console.log(resultado);
} 

estructuraImpuesto.forEach(function (elemento){
    imprimirRangoImpuesto(elemento)
})

///Usando funciones de flecha
estructuraImpuesto.forEach((elemento) => {
    var resultado = elemento.hasta-elemento.desde;
    console.log(resultado);
})

//
estructuraImpuesto.forEach(elemento => console.log(elemento.hasta - elemento.desde))

var rangosImpuestoSobreLaRenta = estructuraImpuesto.map(elemento => elemento.hasta - elemento.desde)

console.log(rangosImpuestoSobreLaRenta)

module.exports = {
    rangosImpuestoSobreLaRenta: rangosImpuestoSobreLaRenta
}

//console.log(estructuraImpuesto[1].desde)