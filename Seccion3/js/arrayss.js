let videoJuegos = ['Mario 3', 'Megaman', 'call of duty', 'tetris'];

console.log(videoJuegos);

console.log(videoJuegos[0]);

//const arr = new Array[3];
//const arr = [];

let arregloCosas = [
    true,
    123,
    'Jose',
    1+2,
    function(){},
    () => {},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light']
];

console.log(arregloCosas);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[arregloCosas.length - 6]);

// recorrer un arreglo
videoJuegos.forEach((valor, indice, arr) => {
    console.log(valor, indice, arr);
});

videoJuegos.push('clash royale');
