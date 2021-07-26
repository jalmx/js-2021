const textoVacio = ''
const texto = 'hola'

//if( Boolean(textoVacio) == true)
//if(textoVacio == true)
//if(textoVacio)

textoVacio ? console.log('texto vacio Es TRUE') : console.log('texto vacio Es FALSO')
texto ? console.log('texto Es TRUE') : console.log('texto FALSO')

const numeroNegativo = -5
const cero = 0
const numeroPositivo = 100

numeroNegativo ? console.log('neegativo Es TRUE') : console.log('neegativo FALSO')
cero ? console.log('cero Es TRUE') : console.log('cero FALSO')
numeroPositivo ? console.log('positivoo Es TRUE') : console.log('positivo FALSO')

const verdadero = true
const falso = false

const objVacio = {}
const obj = {'valor': 1}
objVacio ? console.log('obj vacio Es TRUE') : console.log('obj vacio FALSO')
obj ? console.log('obj Es TRUE') : console.log('obj FALSO')

const arrVacio = []
const arr = [1,2,56,3,56]
arrVacio ? console.log('arr vacio Es TRUE') : console.log('arr vacio FALSO')
arr ? console.log('arr Es TRUE') : console.log('arr FALSO')

const nulo = null
const sinDefinir = undefined