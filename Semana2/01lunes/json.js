{  }// JSON vacio

const informacion = {//construccion de un JSON
    'nombre' : "Alejandro",
    'edad' : 30,
    'isAlive' : true,
    "altura" : 1.7,
    "tipo_carro": "beat",
    "location":{
        'lat': 18.56165165156156,
        'lng' : 95.561655641546154541
        },
    'lang':['java','js','python','lua','C','kotlin']
}

console.log(informacion);

//Notacion del punto
console.log(informacion.location.lat);
console.log(informacion.lang.push('Rust'));
console.log(informacion.lang);
console.log(informacion.tipo_carro);

//Notacion del []
console.log(informacion['tipo_carro']);
console.log(informacion['nombre']);

//Ingresando datos

informacion['pc'] = {
    'os': 'Debian',
    'type' : 'Desktop'
}

informacion.tipo_carro = 'Mini Cooper' //editando el contenido del JSON

delete informacion.isAlive //borro un atributo de un JSON

console.log(informacion);

const auto = {}

auto.color = 'verde'//creando una propiedad que no existe

console.log(auto);

for(const key in informacion){
    console.log(`con la llave "${key}" contiene "${informacion[key]}"`);
}

alert(informacion)