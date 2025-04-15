/**
 * Días de la semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

const dia = 0; // 0: domingo, 1: lunes....
const horaActual = 7;

let horaApertura;
let mensaje;

if(dia == 0 || dia == 6) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de semana');
    horaApertura = 11;
}

console.log({horaApertura});


if(horaActual >= horaApertura) {
    mensaje = 'Está abierto';
} else {
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log(horaApertura, mensaje);


// REFACTORIZANDO

horaApertura = [0, 6].includes(dia) ? 9 : 11;

mensaje = horaActual >= horaApertura 
                        ? mensaje = `Está abierto` 
                        : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});
