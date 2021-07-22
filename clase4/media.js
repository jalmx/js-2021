let suma = 0//variable que guarda la suma total

const total = parseInt(prompt("Cuantos valores tienes?"))

for(let contador = 0; contador < total; contador++){
    const valor = parseInt(prompt(`Dar el valor ${contador + 1}: `))
    suma = suma + valor
}

const media = suma / total

console.log(`La media es  ${media}` );