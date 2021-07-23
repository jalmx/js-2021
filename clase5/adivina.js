const random = parseInt(Math.random() * 10) +1

alert("Juego de adivina el numero\nEl rango es de 1 al 10\ny tienes 3 oportunidades")

let contador = 0
while( true ){

    const numero = parseInt(prompt('Dar un numero: '))

    if(numero < random){
        contador++
        alert('El numero secreto es mayor, llevas ' + contador + " fallas")
    }

    if(numero > random){
        contador++
        alert('El numero secreto es menor, llevas ' + contador + " fallas")
    }

    if(numero == random){
        alert('Felicidades le atinaste, el numero era ' + random)
        break
    }

    if(contador == 3){
        alert('Lastima margarito, el numero era ' + random)
        break
    }
}
