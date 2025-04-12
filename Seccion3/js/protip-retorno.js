function crearPersona (nombre, apellido) {
    return {nombre, apellido}
}

const crearPersonaPro = (nombre, apellido) => ({nombre, apellido});

console.log(crearPersona('gino', 'nuñez'));
console.log(crearPersonaPro('jose', 'nuñez'));

//---------------------------------
function imprimeArgumentos() {
    console.log(arguments);
}

// se puede hacer en una sola línea
const imprimeArgumentosPro = (nombre, ...args) => { // no puede haber un argumento después de args
    //console.log({nombre, args}); 
    return args;
}

imprimeArgumentos('gino', 60, 'senior', 'C++');
imprimeArgumentosPro('jose', 17, 'junior', 'Java');

const [age, seniority, language] = imprimeArgumentosPro('jose', 17, 'junior', 'Java');
console.log({age, seniority, language});

//---------------------------------
const {apellido: nuevoAellido} = crearPersonaPro('Jose', 'Nuñeñz');
console.log({nuevoAellido});

//---------------------------------
const tony = {
    nombre: 'Tony Montana',
    codeName: 'cara cortada',
    vivo: false,
    edad: 40
}

const imprimirPropiedades = ({nombre, codeName, vivo, edad = 20, trajes}) => {
    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
}

console.log(imprimirPropiedades(tony));