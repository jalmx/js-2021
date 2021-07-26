const arrayVacio = [ ]
const array = ['hola','mundo',5,false, {},[2],"saludo","vochito"]

const texto = array[0]
const numero = array[2]
const arr = array[5]

console.log(texto);
console.log(texto);
console.log(arr);

console.log(array);

array[4] = 'erick'
array[3] = 'programacion'
console.log(array);

console.log("La longitud del array " + array.length);

for(let i = 0; i < array.length ;i++){
    console.log(array[i]);
}