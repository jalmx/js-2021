
for(let i = 0; i < 5; i++){
    const numero = parseInt(prompt('Dar un numero xD : '))
    
    if(numero % 2 == 1){
        console.log('Es impar, guaacala!!!!!');
        continue
    }

    console.log(`${numero} es par y me gusta`);

}
