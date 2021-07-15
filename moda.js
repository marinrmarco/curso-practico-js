const calculaModa = function(list){
    if (list.length === 0){
        return 'La lista no debe estar vacía'
    }
    let listaCount = {}
    list.map(function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1 
        } else{
            listaCount[elemento] = 1
        }
    });
    const listaArray = Object.entries(listaCount).sort((a,b) => a[1]-b[1])
    return `La moda es: ${listaArray[listaArray.length-1][0]}`
}