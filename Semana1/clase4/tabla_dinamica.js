const tabla =parseInt(prompt("Dar el valor de la tabla"))

for(let i = 1; i <= 10; i++){
    const resultado = tabla * i
    console.log(`${tabla} x ${i} = ${resultado}`);
}
