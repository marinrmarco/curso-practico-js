// Código del cuadrado
function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}

function calcPerimetroCuadrado(){
    let lado = document.getElementById("ladoCuadrado").value;
    alert(perimetroCuadrado(lado))
}

function calcAreaCuadrado(){
    let lado = document.getElementById("ladoCuadrado").value;
    alert(areaCuadrado(lado))
}

// Código del triángulo
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura){
    return (base * altura)/2
} 

function calcPerimetroTriangulo(){
    let lado1Triangulo = document.getElementById("lado1Triangulo").value;
    let lado2Triangulo = document.getElementById("lado2Triangulo").value;
    let baseTriangulo = document.getElementById("baseTriangulo").value;
    alert(perimetroTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo))
}

function calcAreaTriangulo(){
    let lado1Triangulo = document.getElementById("lado1Triangulo").value;
    let lado2Triangulo = document.getElementById("lado2Triangulo").value;
    let baseTriangulo = document.getElementById("baseTriangulo").value;
    alert(areaTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo))
}

// Código del círculo
function diametroCirculo(radio){
    return radio*2;
}

function circunferenciaCirculo (radio){
    return Math.round((Math.PI * diametroCirculo(radio))*100)/100;
}

function areaCirculo (radio){
    return Math.round((Math.PI * (radio * radio)*100))/100;
}

function calcDiametroCirculo(){
    let radio = document.getElementById("radioCirculo").value;
    alert(diametroCirculo(radio));
}

function calcCircunferenciaCirculo(){
    let radio = document.getElementById("radioCirculo").value;
    alert(circunferenciaCirculo(radio));
}
function calcAreaCirculo(){
    let radio = document.getElementById("radioCirculo").value;
    alert(areaCirculo(radio));
}

// Código Triángulo Isósceles

function alturaTriangulo(base, lados){
    return Math.sqrt(Math.pow(base/2, 2) + Math.pow(lados, 2)) 
}

function calcAlturaTriangulo(){
    let base = document.getElementById("baseTrianguloI").value;
    let altura = document.getElementById("ladosTriangulo").value;
    alert(alturaTriangulo(base, altura))
}

