const calificacion = -5

if(calificacion < 6 && calificacion >=0){
    console.log('Lastima margarito');
}

if(calificacion >= 6 && calificacion < 7){
    console.log('Paso de panzaso');
}

if(calificacion >= 7 && calificacion < 8){
    console.log('Echale mas punch');
}

if( calificacion >= 8 && calificacion < 9){
    console.log('Bien, puedes mejorar');
}

if(calificacion >= 9 && calificacion <10){
    console.log('Muy bien, te falto tantito');
}

if(calificacion === 10){
    console.log('Excelente, te ganaste las cheves!');
}

if(calificacion > 10 || calificacion < 0){
    console.log('Calificacion no posible, fijate bien');
}
// if(calificacion < 0){
//     console.log('Calificacion no posible');
// }