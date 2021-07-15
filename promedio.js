const lista1 = [
    100,
    200,
    300,
    500
];

const calcPromedioLista = function(lista) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return lista.reduce(reducer)/lista.length;
};
