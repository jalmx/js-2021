const total = prompt("Dar el total de datos")
let suma = 0
const datos = []

for(let i = 0; i < total; i++){
    const dato = parseInt( prompt("Dar el dato " + (i+1) + " :") )
    datos.push(dato)
    suma += dato
}

const media = suma/total

console.log(datos);

let sumaDesviacion = 0

for(let i = 0; i < datos.length; i++){
    const resta = datos[i] - media
    const cuadrado = resta ** 2
    sumaDesviacion += cuadrado
}

const divisionDesv = sumaDesviacion / datos.length

const desviacion = Math.sqrt(divisionDesv)

console.log(`La media es ${media}`);
console.log(`La desviacion estandar es ${desviacion}`);


const arr = [36,6,15,6,51,63,1,63,1,61,6,1,63]
