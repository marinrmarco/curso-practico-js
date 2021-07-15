const lista1 = [
    100,
    200,
    500,
    400,
    600,
    800,
];

//ordenar la lista de forma ascendente
lista1.sort((a,b)=>a-b);
console.log(lista1);

const mitadLista1 = Math.trunc(lista1.length / 2);
let mediana;

//Determinar si la longitud de la lista es par o impar

function esPar(numero){
    return (numero % 2 === 0)
}

if (esPar(lista1.length)){
    mediana = (lista1[mitadLista1] + lista1[mitadLista1-1])/2
}else{
    mediana = lista1[mitadLista1]
}




