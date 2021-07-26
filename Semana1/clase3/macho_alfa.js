const MACHO = 1
const SENIORITA = 2

const opcion = 7

if (opcion === MACHO) {
    console.log("Eres macho alfa lomo plateado");
} else if (opcion === SENIORITA) {
    console.log('Eres una linda señorita');
} else if (opcion == 3) {
    console.log("Eres no binario");
} else {
    console.log("Formato desconocido");
}

switch(opcion){
    case 1:
        console.log("Eres macho alfa lomo plateado");
        break;
    case 2:
        console.log('Eres una linda señorita');
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Eres no binario");
        break;
    default:
        console.log("Formato desconocido");
}