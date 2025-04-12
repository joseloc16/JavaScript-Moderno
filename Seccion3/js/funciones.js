
// mala practica
function saludar() {
    console.log('Hola mundo');
}

// función anónima
const saludar2 = function() {
    console.log('Hola mundo');
}

// función con argumentos
function saludar3 (nombre) {
    console.log(arguments); // viene desde el mismo js
    console.log('Hola ' + nombre);
}

const saludar4 = () => {
    console.log('Hola flecha');
}

const saludar5 = (nombre) => {
    console.log('Hola ' + nombre);
}

function funcRetorno (nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 1;
}

const retornoSaludar = funcRetorno('Jose', 17, true, 'Costa Rica'); // 1

saludar();
saludar2();
saludar3('joseloc');
saludar4();
saludar5('joselo')

console.log(retornoSaludar); // 1

// -------------------------------------------------------------
function sumar(a, b) {
    return a + b;
}

const multiplicar = (n1, n2) => n1 * n2;

console.log('suma: ' + sumar(7, 10));
console.log('multiplicación: ' + multiplicar(7, 10));

