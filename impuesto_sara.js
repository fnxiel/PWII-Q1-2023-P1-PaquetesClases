const valor_impuesto = {
    taza1: 15/100,
    taza2: 20/100,
    taza3: 25/1000
}

function evaluarISR(sueldo_anual) {
    if (sueldo_anual >= 199039.48 && sueldo_anual <= 303499.90) {
        sueldo_anual = sueldo_anual * valor_impuesto.taza1; 
        console.log( "Su sueldo anual es de:" + sueldo_anual);       
    } if (sueldo_anual >= 303499.90 && sueldo_anual <= 705813.76) {
        sueldo_anual = sueldo_anual * valor_impuesto.taza2; 
        console.log( "Su sueldo anual es de:" + sueldo_anual);           
    }
    if (sueldo_anual >= 705813.77) {
        sueldo_anual = sueldo_anual * valor_impuesto.taza3;    
        console.log( "Su sueldo anual es de:" + sueldo_anual);        
    }
    return sueldo_anual
}

module.exports = {
    impuesto: evaluarISR
}

//evaluarISR(199039.49);