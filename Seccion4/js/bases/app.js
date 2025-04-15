// todos los datos primitivos se pasan por valor
let a = 10;
let b = a;
a = 30; 

console.log({a,b});

// todos los objetos son pasados por referencia
let juan = {nombre: 'juanm'};
let ana = {...juan}; // así se evita que se modifique el mismo objeto
ana.nombre = 'Ana';

console.log({juan , ana});

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter,tony});

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('Slice');
const otrasFrutas = frutas.slice();
console.timeEnd('Slice');

console.time('Spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('Spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});
