const a = '10';
const b = 10;

//coercion

10 == '10' // tipos son diferente, contenido 10 == '10' -->true
10 === '10'// revisa el tipo, number =/=string  ---> false

if(a > b){
    console.log(`${a} es mayor que ${b}`);
}
if(a < b){
    console.log(`${a} es menor que ${b}`);
}
if(a >= b){
    console.log(`${a} es mayor o igual que ${b}`);
}
if(a <= b){
    console.log(`${a} es menor o igual que ${b}`);
}
if(a != b){
    console.log(`${a} es diferente (no estricto) que ${b}`);
}

if(a !== b){
    console.log(`${a} es diferente (estricto )que ${b}`);
}
if(a == b){
    console.log(`${a} es igual (no estricto) que ${b}`);
}
if(a === b){
    console.log(`${a} es igual (estricto) que ${b}`);
}
