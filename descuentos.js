const cupones = [
    {
        nombre: "cupon15",
        valor: 15
    },
    {
        nombre: "cupon20",
        valor: 20
    },
    {
        nombre: "cupon25",
        valor: 25
    },
];

var cuponUsuario;
var cuponValido;

const esUnCuponValido = function(cupon){
    return cupon.nombre === cuponUsuario;
}

//const cuponValido = cupones.find(esUnCuponValido)

function calcularPrecioConDescuento(precioOriginal, factorPrecio){
    return precioTotal = Math.round((precioOriginal * factorPrecio) * 100)/100;
}

function calcularFactor(){
    //Verificar Cupon
    cuponValido = cupones.find(esUnCuponValido)
    if (!cupones.find(esUnCuponValido)){ return 1
    }else return (100 - cuponValido.valor)/100;
}

function calcPrecioConDescuento(){
    let precio = document.getElementById("precioOriginal").value;
    cuponUsuario = document.getElementById("cuponDescuento").value;
    let factorPrecio = calcularFactor(cuponUsuario);
    const precioConDescuento = calcularPrecioConDescuento(precio, factorPrecio);
    if (factorPrecio === 1){
        document.getElementById("resultCupon").innerText =  `El descuento aplicado será de 0%`
    }else{
        document.getElementById("resultCupon").innerText =  `El descuento aplicado será de ${cuponValido.valor}%`
    }
    document.getElementById("precioConDescuento").innerText = `El precio con descuento es $${precioConDescuento}`;
}

