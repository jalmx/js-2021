// function generateRandom(maximum, minimum = 0){
//     return Math.floor(Math.random() * (maximum - minimum)) + minimum;
// }

//funciones flechas (arrow)

const COMPART = {
    'OK': 0,
    'MENOR': -1,
    'MAYOR': 1
}

const generateRandom = (maximum, minimum = 0) => {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

const loadNumberRandom = () => {
    const min = parseInt(document.getElementById('minimo').value)
    const max = parseInt(document.getElementById('maximo').value)

    return generateRandom(max, min)
}

const compart = (number, numberRandom) => {
    if (number == numberRandom) {
        return COMPART.OK;
    } else if (number >= numberRandom) {
        return COMPART.MENOR;
    } else if (number <= numberRandom) {
        return COMPART.MAYOR;
    }
}

const phraseAlert = (answer) => {
    // funcion mostrara un alert indicando que si el numeero es menor o mayor
    if (COMPART.MAYOR == answer) {
        alert("El numero es mayor")
    } else if (COMPART.MENOR == answer) {
        alert('El numero es menor')
    }
}

const phrase = (tried, numberRandom) => {

    const reaccion = document.getElementById('reaccion')
    const adivina = "😁 Adivina"
    const ganaste = "Ganaste 🎉🎉🎉"
    const loser = "😵 Loser"

    let answer = adivina

    if (tried === COMPART.OK) {
        answer = ganaste
    } else if (tried === COMPART.MAYOR || tried === COMPART.MENOR) {
        answer = loser

    } else if (tried == 3) {
        answer = `${loser}, el numero era ${numberRandom}`
    }
    reaccion.innerText = answer
}

const loadIntentos = (number) => {
    const intentosSpan = document.getElementById('intentos')
    intentosSpan.innerText = number
}

const disabledTryButton = (status) => {
    const btn = document.getElementById('btn-responder')
    btn.disabled = status
}

((d) => {
    let numberRandom = loadNumberRandom()
    let intentos = 0

    addEventListener('click', (e) => {

        if (e.target.id === 'btn-responder') {
            const number = parseInt(document.getElementById('respuesta').value)
            if (isNaN(number)) {
                alert('No ingresaste el numero')
                document.getElementById('respuesta').focus()
                return
            }
            console.log('el numero es ', numberRandom);
            const answer = compart(number, numberRandom)
            phraseAlert(answer)
            intentos++
            loadIntentos(intentos)
            console.log(number);
            phrase(answer)

            if (intentos >= 3 || answer == COMPART.OK) {
                disabledTryButton(true)
                if (intentos >= 3) phrase(3, numberRandom)
            }
        }

        if (e.target.id === 'btn-reset') {
            numberRandom = loadNumberRandom()
            intentos = 0
            loadIntentos(intentos)
            phrase(-3, numberRandom)
            disabledTryButton(false)
            document.getElementById('respuesta').value = ''
        }
    })

    addEventListener('change', (e)=>{
        if(e.target.id === 'minimo' || e.target.id === 'maximo'){
            numberRandom = loadNumberRandom()
            intentos = 0
            loadIntentos(intentos)
            phrase(-3, numberRandom)
            disabledTryButton(false)
            document.getElementById('respuesta').value = ''
        }
    })

})(document)

