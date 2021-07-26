//ira el prompt con el menu

// 1 suma
// 2 resta
// 3 mult
// 4 division
// si dan otra opcion que lanze la alerta que esa opcion no existe
const opcion =  3

if(opcion > 4){ //arreglarlo para ttodos casos que no apliquen al menu
    console.log('Esa opcion no existe');
}else{
    const valor1 = 5 
    const valor2 = 2
    let resultado = 0

    if( opcion == 1){
        resultado =  valor1 + valor2
    }else if(opcion == 2){
        resultado =  valor1 - valor2
    }else if(opcion == 3){
        resultado =  valor1 * valor2
    }//cotinuar con lo que falte

    console.log("El resutado es " + resultado );
}

