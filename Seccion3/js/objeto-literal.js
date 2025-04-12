let personaje = {
    nombre: 'Tonystark',
    codeName: 'IronMan',
    casado: false,
    vivo : false,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['MArk I', 'Mark V', 'Hulk Buster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log('Nombre: ', personaje.nombre);
console.log('Edad: ', personaje.edad);
console.log('Latitud: ', personaje.coords.lat);
console.log('No de Trajes: ', personaje.trajes.length);

// -------------------------------------------------------------
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje); // ya no permite cambios en las propíedades del objeto, ni crear nuevas propiedades

personaje.dinero = 1215652; // no se realiza
personaje.casado = true; // nos e realiza

personaje.direccion.ubicacion = 'villa del mar'; // se realiza

// Object.freeze solo se aplica las asignaciones a las propiedades directas, pero no a los objetos dentro del ojbeto (personaje)

// -------------------------------------------------------------
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades, valores);
