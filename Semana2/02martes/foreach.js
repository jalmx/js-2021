const numeros = [1,2,3,6,4,8,1,6]

const n = numeros.map(function(e){
    console.log(`map: ${e}`);
    return  e *3
})
console.log(n);
console.log('------------------');

numeros.forEach(function(e){
    console.log(`foreach: ${e}`);
})

console.log('------------------');

for(let i = 0; i< numeros.length; i++){
    console.log(numeros[i]);
}
console.log('------------------');

for(let element of numeros){
    console.log(element);
}
console.log('---------------------');
