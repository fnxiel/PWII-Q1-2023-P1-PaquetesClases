// funcion calcularImpuesto

const impuesto=(monto) => {
    if(monto<"199,029.47"){
        return monto; 
    }else if(monto<"303,499.90"){
        return monto*0.15;
    }else if(monto<"705,813.76"){
        return monto*0.20;
    }else if(monto>"705,813.76"){
        return monto*0.25;
    }
}

module.exports = {
    impuesto: impuesto
}