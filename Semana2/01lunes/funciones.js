// crear una funcion que mande un saludo
function saludar(){
    console.log('Hola a todos!! desde JavaScript');
}

function saludarUsuario(nombre){
    console.log(`Hola ${nombre}, como estas?!!!`);
}

//crear una funcion que eleve al cuadrado numero
function alCuadrado(numero){
    const potencia = numero ** 2
    console.log(`El cuadrado de ${numero} es: ${potencia}`);
}
//crear una funcion que eleve a una potencia indicada por el usario
function potencia(base, pot){
    const numero = base ** pot;
    console.log(`El valor ${base} elevado a la potencia ${pot} es ${numero}`);
}

saludar()
saludarUsuario('Erick')
saludarUsuario('Priscila')
saludarUsuario('Puing')

alCuadrado(2)
alCuadrado(3)
alCuadrado(4)

potencia(2,2)
potencia(2,3)
potencia(2,4)

const funcionAnonima = function(mensaje){
    function logg(mensaje2){
        console.log('funcion anonima "' + mensaje2+'"');
    }

    logg(mensaje)    
}   


funcionAnonima('esto es de una variable')

//crear una funcion que calcule el area de un rectangulo

const areaRectangulo = function (base, altura){
    const area = base * altura
    return area;
}

const perimetroRectangulo = function(base, altura){
    return (2*base) + (2*altura)
}

const resultado = areaRectangulo(5,6)

console.log(`El area del rectangulo es ${resultado}`);
console.log(`El perimetro del rectangulo es ${perimetroRectangulo(5,6)}`);

//crear una funcion para calcular
// el area del circulo
// el perimetro del circulo
// el area del triangulo
// el perimetro del triangulo