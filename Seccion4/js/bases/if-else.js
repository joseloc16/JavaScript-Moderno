let a = 20;

if(a<10) {
    console.log('A es menor a 10');
} else {
    console.log('A es mayor a !0');
}

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...

console.log(dia); // Mon Apr 14 2025

// == -> solo compara el valor, no importa si es numero, string,etc
// === ->  evalúa que el valor y el tipado es el mismo


console.log('Día de la semana usando if-else');
if(dia === 0) {
    console.log('Hoy es Domingo');
}else if (dia === 1) {
    console.log('Hoy es Lunes');
} else if (dia === 2) {
    console.log('Hoy es Martes');
} else if (dia === 3) {
    console.log('Hoy es Miércoles');
} else if (dia === 4) {
    console.log('Hoy es Jueves');
} else if (dia === 5) {
    console.log('Hoy es Viernes');
} else {
    console.log('Hoy es Sábado');
}

console.log('Día de la semana usando Arreglos');
let diaSemanaArreglo = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
]

console.log(diaSemanaArreglo[dia]);

console.log('Día de la semana usando Objetos');
const diaSemanaObj = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'S+abado'
}

console.log(diaSemanaObj[dia]);
